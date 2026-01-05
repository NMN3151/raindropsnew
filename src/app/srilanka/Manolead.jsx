"use client";
import React, { useEffect, useRef, useState } from "react";

function Manolead() {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const cardRefs = useRef([]);
  const canvasRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, []);

  useEffect(() => {
    const cleanups = [];

    canvasRefs.current.forEach((canvas, index) => {
      if (!canvas || !imageRefs.current[index]) return;

      const ctx = canvas.getContext("2d");
      const img = imageRefs.current[index];

      let animationId;
      let time = 0;
      let mouseX = -1000;
      let mouseY = -1000;
      let isHovering = false;

      const setCanvasSize = () => {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      };

      const drawWaterEffect = () => {
        if (!img.complete) return;

        setCanvasSize();

        const { width, height } = canvas;

        ctx.clearRect(0, 0, width, height);

        if (!isHovering) {
          ctx.drawImage(img, 0, 0, width, height);
          return;
        }

        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext("2d");

        tempCtx.drawImage(img, 0, 0, width, height);

        const imageData = tempCtx.getImageData(0, 0, width, height);
        const pixels = imageData.data;

        const outputData = ctx.createImageData(width, height);

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const waveSpeed = 0.001;
            const waveAmplitude = 6;

            const wave1 = Math.sin(x * 0.02 + time * waveSpeed) * waveAmplitude;
            const wave2 =
              Math.sin(y * 0.03 + time * waveSpeed * 1.3) * waveAmplitude;
            const wave3 =
              Math.cos(x * 0.015 + y * 0.015 + time * waveSpeed * 0.7) *
              (waveAmplitude * 0.5);

            let mouseWave = 0;
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
              const rippleStrength = 1 - distance / maxDistance;
              mouseWave =
                Math.sin(distance * 0.1 - time * 0.3) * rippleStrength * 15;
            }

            const totalWave = wave1 + wave2 + wave3 + mouseWave;

            const displaceX = Math.round(x + totalWave);
            const displaceY = Math.round(y + totalWave * 0.5);

            const clampedX = Math.max(0, Math.min(width - 1, displaceX));
            const clampedY = Math.max(0, Math.min(height - 1, displaceY));

            const srcIndex = (clampedY * width + clampedX) * 4;
            const destIndex = (y * width + x) * 4;

            outputData.data[destIndex] = pixels[srcIndex] * 0.95;
            outputData.data[destIndex + 1] = pixels[srcIndex + 1] * 0.98;
            outputData.data[destIndex + 2] = Math.min(
              255,
              pixels[srcIndex + 2] * 1.1
            );
            outputData.data[destIndex + 3] = pixels[srcIndex + 3];
          }
        }

        ctx.putImageData(outputData, 0, 0);

        time += 1;
        animationId = requestAnimationFrame(drawWaterEffect);
      };

      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
        mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
      };

      const handleMouseEnter = () => {
        isHovering = true;
        time = 0; 
        drawWaterEffect();
      };

      const handleMouseLeave = () => {
        isHovering = false;
        mouseX = -1000;
        mouseY = -1000;
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      if (img.complete) {
        setCanvasSize();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        img.onload = () => {
          setCanvasSize();
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseenter", handleMouseEnter);
      canvas.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        cancelAnimationFrame(animationId);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseenter", handleMouseEnter);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [isVisible]);

  const cards = [
    {
      id: 1,
      image: "/assets/images/sri lanka/sl16.png",
      title: "Study",
      subtitle: "(Pariyatti)",
      description: "Understanding the nature of mind, perception, and emotion.",
      fallbackImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    },
    {
      id: 2,
      image: "/assets/images/sri lanka/sl15.png",
      title: "Investigate",
      subtitle: "(Patipatti)",
      description:
        "Observing how your mind behaves in real time through breathing, walking, sensing & silence.",
      fallbackImage:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    },
    {
      id: 3,
      image: "/assets/images/sri lanka/sl14.png",
      title: "Practice",
      subtitle: "(Pativedha)",
      description:
        "Turning calmness into a habit, clarity into a skill & insight into action.",
      fallbackImage:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    },
  ];

  return (
    <>
      <div className="rts__section philosophy__section section__padding">
        <div className="container">
          <h2 className="content__title wow fadeInUp">
            Why This Matters - Insights from{" "}
            <span style={{ color: "#2996C1" }}>ManoLead</span>
          </h2>
          <div className="country_text">
            <p className="content__subtitle wow fadeInUp">
              ManoLead's research shows that:
              <ul className="list">
                <li>
                  Most leaders and travelers experience{" "}
                  <strong>overstimulated perception</strong>.
                </li>
                <li>
                  Emotional overload reduces clarity, connection, and
                  decision-making.
                </li>
                <li>
                  Calmness is not a personality trait —{" "}
                  <strong>it is a trainable skill</strong>.
                </li>
                <li>
                  When the mind meets nature, the nervous system resets faster
                  than in any man-made environment.
                </li>
              </ul>
              This is why{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontFamily: "BrittanySignature",
                  fontSize: 18,
                }}
              >
                Rain Drops
              </span>
              &nbsp; was created beside{" "}
              <span style={{ color: "#BDA671" }}>Sinharaja</span>, one of the
              world's purest rainforests. Your surroundings do half the work.
              The teaching does the rest.
            </p>
          </div>

          <div className="mindfulness__section">
            <div className="cards__grid">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`card ${isVisible[index] ? "visible" : ""}`}
                >
                  <div className="card__image-container">
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={card.image}
                      alt={card.title}
                      className="card__image-hidden"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        e.target.src = card.fallbackImage;
                      }}
                    />
                    <canvas
                      ref={(el) => (canvasRefs.current[index] = el)}
                      className="water-canvas"
                    />
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      {card.title}{" "}
                      <span className="card__subtitle">{card.subtitle}</span>
                    </h3>
                    <p className="card__description">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {" "}
            <p className="content__subtitle wow fadeInUp">
              This is not meditation as ritual.
              <br />
              This is mindfulness as a method — measurable, practical, and
              profoundly human. <a href="https://manolead.com/"
              target="_blank" rel="noopener noreferrer" 
              >(www.manolead.com)</a>
             
              
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content__title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .country_text {
          margin: 40px 0;
        }

        .content__subtitle {
          text-align: justify;
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .content__subtitle ul {
          margin: 20px 0;
          padding-left: 20px;
        }

        .content__subtitle li {
          margin: 10px 0;
          line-height: 1.8;
        }

        .mindfulness__section {
          padding: 60px 0 20px 0;
        }

        .cards__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .card {
          background: #f5f5f5;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(50px);
        }

        .card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card__image-container {
          width: 100%;
          height: 400px;
          position: relative;
          background: #1a3a52;
          overflow: hidden;
        }

        .card__image-hidden {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .water-canvas {
          width: 100%;
          height: 100%;
          display: block;
          cursor: pointer;
        }

        .card__content {
          padding: 25px;
          background-color: #f5f5f5;
        }

        .card__title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .card__subtitle {
          font-size: 1rem;
          color: #666;
          font-style: italic;
          margin-left: 5px;
        }

        .card__description {
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
          margin: 0;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            padding: 0 25px;
          }

          .content__title {
            font-size: 2.2rem;
            margin-bottom: 25px;
          }

          .cards__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .card:last-child {
            grid-column: 1 / -1;
            max-width: 600px;
            margin: 0 auto;
          }

          .card__image-container {
            height: 350px;
          }

          .content__subtitle {
            font-size: 1.05rem;
            line-height: 1.65;
          }
        }

        @media (min-width: 600px) and (max-width: 767px) {
          .content__title {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .cards__grid {
            grid-template-columns: 1fr;
            gap: 25px;
            max-width: 500px;
            margin: 0 auto;
          }

          .card__image-container {
            height: 300px;
          }

          .content__subtitle {
            font-size: 1rem;
            line-height: 1.6;
          }

          .card__content {
            padding: 20px;
          }

          .card__title {
            font-size: 1.3rem;
          }

          .card__description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 599px) {
          .container {
            padding: 0 15px;
          }

          .content__title {
            font-size: 1.75rem;
            margin-bottom: 20px;
            line-height: 1.3;
          }

          .cards__grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card__image-container {
            height: 240px;
          }

          .card__content {
            padding: 18px;
          }

          .card__title {
            font-size: 1.25rem;
          }

          .card__subtitle {
            font-size: 0.9rem;
          }

          .card__description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .content__subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .content__subtitle ul {
            padding-left: 18px;
          }

          .content__subtitle li {
            margin: 8px 0;
            line-height: 1.6;
          }

          .mindfulness__section {
            padding: 40px 0 15px 0;
          }

          .country_text {
            margin: 30px 0;
          }
          .list {
            text-align: left;
          }
        }

        @media (max-width: 375px) {
          .content__title {
            font-size: 1.6rem;
          }

          .card__image-container {
            height: 200px;
          }

          .card__content {
            padding: 15px;
          }
          .list {
            text-align: left;
          }
          .card__title {
            font-size: 1.15rem;
          }

          .card__description {
            font-size: 0.85rem;
          }

          .content__subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default Manolead;
