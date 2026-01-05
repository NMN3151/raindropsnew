'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function WebsitePortfolio() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null);

    const websites = [
        {
            id: 1,
            name: "Manolead",
            url: "https://manolead.com",
            logo: "/assets/images/logo/Manolead-01.png",
            description: "Leading digital solutions and innovation",
            width: 267,
            height: 120
        },
        {
            id: 2,
            name: "Mindful Living",
            url: "https://magga.life",
            logo: "/assets/images/logo/Magga Logo.png",
            description: "Wellness and mindfulness platform",
            width: 267,
            height: 100
        },
        {
            id: 3,
            name: "IntTerminal",
            url: "https://intterminal.com",
            logo: "/assets/images/logo/intt logor 2.png",
            description: "Terminal services and logistics",
            width: 277,
            height: 100
        },
        {
            id: 4,
            name: "Int Leisure",
            url: "https://intleisure.com",
            logo: "/assets/images/logo/NEW INTTL Logo Color.png",
            description: "Premium leisure experiences",
            width: 267,
            height: 100
        },
        {
            id: 5,
            name: "Int Advisor",
            url: "https://intadvisor.com",
            logo: "/assets/images/logo/Int Advisor horizontal  (4).png",
            description: "Professional advisory services",
            width: 267,  
            height: 60  
        },
        {
            id: 6,
            name: "Kumbuk Villa",
            url: "https://kumbukvilla.com",
            logo: "/assets/images/logo/kumbuk villa logo.png",
            description: "Luxury hospitality destination",
            width: 267,
            height: 100
        },
    ];

    useEffect(() => {
        const container = scrollRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        let animationId;
        let scrollPos = 0;
        const speed = 1; 

      
        const originalContent = content.innerHTML;
        content.innerHTML = originalContent + originalContent;

        const autoScroll = () => {
            scrollPos += speed;
            if (scrollPos >= content.scrollWidth / 2) {
                scrollPos = 0;
            }
            
            container.scrollLeft = scrollPos;
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId);
        };

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(autoScroll);
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <section className="portfolio__section">
                <div className="portfolio__container">
                
                    <div className="portfolio__header">
                        <div className="header__content">
                            <h2 className="section__title">Our Brands Presence</h2>
                        </div>
                    </div>
                    <div 
                        ref={scrollRef}
                        className="portfolio-scroll-container"
                    >
                        <div 
                            ref={contentRef}
                            className="portfolio-scroll-content"
                        >
                            {websites.map((website) => (
                                <div key={website.id} className="portfolio-scroll-item">
                                    <Link 
                                        href={website.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio__link"
                                    >
                                        <div className="logo__container">
                                            <Image
                                                src={website.logo}
                                                alt={`${website.name} logo`}
                                                width={website.width}
                                                height={website.height}
                                                className={`logo__image ${website.name.toLowerCase().replace(' ', '-')}-logo`}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="logo__fallback">
                                                <span className="fallback__text">{website.name}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .portfolio__section {
                    background: transparent;
                    padding: 80px 0;
                    position: relative;
                    overflow: hidden;
                }

                .portfolio__container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                    position: relative;
                }

               
                .portfolio__header {
                    text-align: center;
                    margin-bottom: 60px;
                }


             
                .portfolio-scroll-container {
                    width: 100%;
                    overflow-x: hidden;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    padding: 40px 0;
                    position: relative;
                    mask-image: linear-gradient(
                        to right,
                        transparent 0%,
                        black 8%,
                        black 92%,
                        transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent 0%,
                        black 8%,
                        black 92%,
                        transparent 100%
                    );
                }

                .portfolio-scroll-container::-webkit-scrollbar {
                    display: none;
                }

                .portfolio-scroll-content {
                    display: flex;
                    gap: 80px;
                    padding: 0 40px;
                    width: max-content;
                    align-items: center;
                }

                .portfolio-scroll-item {
                    flex: 0 0 auto;
                }

               
                .portfolio__link {
                    text-decoration: none;
                    display: block;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .portfolio__link:hover {
                    transform: translateY(-8px);
                }

                .logo__container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 30px;
                    transition: all 0.3s ease;
                }

                .logo__image {
                    object-fit: contain;
                    max-width: 100%;
                    max-height: 100%;
                    transition: all 0.4s ease;
                    filter: grayscale(30%) brightness(1.1);
                    opacity: 0.9;
                }

                .portfolio__link:hover .logo__image {
                    filter: grayscale(0%) brightness(1);
                    opacity: 1;
                    transform: scale(1.08);
                }

               
                .int-advisor-logo {
                    transform: scale(0.85);
                }

                .mindful-living-logo {
                    transform: scale(0.95);
                }

                .int-leisure-logo {
                    transform: scale(0.9);
                }

                .manolead-logo {
                    transform: scale(1);
                }

                .intterminal-logo {
                    transform: scale(0.95);
                }

                .kumbuk-villa-logo {
                    transform: scale(0.95);
                }

                .portfolio__link:hover .int-advisor-logo {
                    transform: scale(0.9);
                }

                .portfolio__link:hover .mindful-living-logo {
                    transform: scale(1);
                }

                .portfolio__link:hover .int-leisure-logo {
                    transform: scale(0.95);
                }

                .portfolio__link:hover .manolead-logo {
                    transform: scale(1.05);
                }

                .portfolio__link:hover .intterminal-logo {
                    transform: scale(1);
                }

                .portfolio__link:hover .kumbuk-villa-logo {
                    transform: scale(1);
                }

                .logo__fallback {
                    display: none;
                    align-items: center;
                    justify-content: center;
                    color: #8a8a6a;
                    font-weight: 600;
                    font-size: 18px;
                    text-align: center;
                }

                .fallback__text {
                    font-weight: 600;
                    font-size: 18px;
                    text-align: center;
                }

                @media (max-width: 320px) {
                    .portfolio__section {
                        padding: 50px 0;
                    }

                    .portfolio__container {
                        padding: 0 15px;
                    }

                    .section__title {
                        font-size: 1.8rem;
                        margin-bottom: 30px;
                    }

                    .portfolio-scroll-container {
                        padding: 30px 0;
                    }

                    .portfolio-scroll-content {
                        gap: 50px;
                        padding: 0 20px;
                    }

                    .logo__container {
                        padding: 20px;
                    }
                }

              
                @media (max-width: 375px) {
                    .portfolio__section {
                        padding: 55px 0;
                    }

                    .section__title {
                        font-size: 2rem;
                        margin-bottom: 35px;
                    }

                    .portfolio-scroll-content {
                        gap: 55px;
                    }
                }

         
                @media (max-width: 575px) {
                    .portfolio__section {
                        padding: 60px 0;
                    }

                    .portfolio__container {
                        padding: 0 18px;
                    }

                    .section__title {
                        font-size: 2.2rem;
                        margin-bottom: 40px;
                    }

                    .portfolio-scroll-container {
                        padding: 35px 0;
                    }

                    .portfolio-scroll-content {
                        gap: 60px;
                        padding: 0 25px;
                    }
                }

             
                @media (min-width: 576px) and (max-width: 767px) {
                    .portfolio__section {
                        padding: 70px 0;
                    }

                    .portfolio__container {
                        padding: 0 25px;
                    }

                    .section__title {
                        font-size: 2.5rem;
                        margin-bottom: 45px;
                    }

                    .portfolio-scroll-container {
                        padding: 40px 0;
                    }

                    .portfolio-scroll-content {
                        gap: 70px;
                        padding: 0 30px;
                    }
                }

            
                @media (min-width: 768px) and (max-width: 1023px) {
                    .portfolio-scroll-content {
                        gap: 90px;
                        padding: 0 40px;
                    }

                    .section__title {
                        font-size: 2.8rem;
                    }
                }

           
                @media (min-width: 1024px) {
                    .portfolio-scroll-content {
                        gap: 100px;
                        padding: 0 50px;
                    }

                    .section__title {
                        font-size: 3rem;
                    }
                }

              
                @media (min-width: 1440px) {
                    .portfolio-scroll-content {
                        gap: 120px;
                    }

                    .section__title {
                        font-size: 3.2rem;
                    }
                }

             
                @media (max-height: 500px) and (orientation: landscape) {
                    .portfolio__section {
                        padding: 40px 0;
                    }

                    .portfolio-scroll-container {
                        padding: 25px 0;
                    }
                }

              
                @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                    .logo__image {
                        filter: grayscale(25%) brightness(1.05);
                    }
                }

              
                @media (prefers-reduced-motion: reduce) {
                    .portfolio-scroll-container {
                        overflow-x: auto;
                        mask-image: none;
                    }
                    
                    .portfolio__link,
                    .logo__image {
                        transition: none;
                    }
                }

              
                @media (hover: none) and (pointer: coarse) {
                    .portfolio__link:hover {
                        transform: none;
                    }

                    .portfolio__link:active .logo__image {
                        transform: scale(0.95);
                        filter: grayscale(0%) brightness(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}

export default WebsitePortfolio;