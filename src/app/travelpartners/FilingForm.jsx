import React, { useState } from "react";
import Image from "next/image";

function FilingForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number (basic validation)
  const isValidPhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  // Check if all required fields are filled and valid
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.email.trim() !== "" &&
      isValidEmail(formData.email) &&
      formData.phone.trim() !== "" &&
      isValidPhone(formData.phone) &&
      formData.address.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  // Handle form submission with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "c4ede7c2-9615-4a2b-8a42-db0f89471f69",
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          subject: "New Travel Partner Registration - RainDrops",
          from_name: "RainDrops Travel Partners",
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Form submitted successfully:", result);
        
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          address: "",
          message: ""
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
      
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="filing-form-section section__padding">
        <div className="container">
          <h2 className="form-title wow fadeInUp">
            START YOUR JOURNEY AS A PARTNER
          </h2>

          {submitSuccess && (
            <div className="success-message wow fadeInUp">
              <p>✓ Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="partner-form wow fadeInUp" data-wow-delay="0.2s">
            <div className="form-row">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Company Field */}
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`form-input ${errors.company ? 'error' : ''}`}
                  placeholder="Enter your company name"
                />
                {errors.company && <span className="error-text">{errors.company}</span>}
              </div>
            </div>

            <div className="form-row">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              {/* Address Field */}
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`form-input ${errors.address ? 'error' : ''}`}
                  placeholder="Enter your address"
                />
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your interest in partnering with RainDrops..."
                  rows="4"
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className="submit-btn"
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>

              <div className="certification-badges">
                <p className="certification-text">
                  Registered & Certified Travel Partner
                </p>
                <div className="badges">
                  <div className="badge">
                   <Image
                     src="/assets/images/travelpartners/footerIATAimage.png"
                     alt="Travel partners exploring nature with binoculars in rainforest"
                     width={70} 
                     height={50}  
                     className="partner-image"
                     loading="lazy"
                   />
                  </div>
                  <div className="badge">
                    <Image
                      src="/assets/images/travelpartners/lionimage.png"
                      alt="Travel partners exploring nature with binoculars in rainforest"
                      width={80} 
                      height={50}
                      className="partner-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Base styles */
        .filing-form-section {
          position: relative;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section__padding {
          padding: 80px 0;
        }

        /* Title */
        .form-title {
          font-size: var(--h2);
          text-align: center;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          color: #2c2c2c;
        }

        /* Success Message */
        .success-message {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 15px 20px;
          border-radius: 6px;
          margin-bottom: 2rem;
          text-align: center;
        }

        .success-message p {
          margin: 0;
          font-size: 1rem;
        }

        /* Form */
        .partner-form {
          background: white;
          padding: 10px 40px;
          border-radius: 8px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .required {
          color: #dc3545;
        }

        .form-input {
          padding: 12px 16px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          transition: all 0.3s ease;
          font-family: inherit;
          background-color: #fff;
        }

        .form-input:focus {
          outline: none;
          border-color: #6f6f6f6a;
          box-shadow: 0 0 0 3px rgba(107, 142, 35, 0.1);
        }

        .form-input.error {
          border-color: #dc3545;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .error-text {
          color: #dc3545;
          font-size: 0.85rem;
          margin-top: 5px;
        }

        /* Form Footer */
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .submit-btn {
          background-color: #b8a462;
          color: white;
          padding: 14px 40px;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 1px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .submit-btn:hover:not(:disabled) {
          background-color: #a08f52;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(184, 164, 98, 0.3);
        }

        .submit-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
          opacity: 0.6;
        }

        /* Certification Badges */
        .certification-badges {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .certification-text {
          font-size:15px;
          color: #555;
          max-width: 230px;
          margin: 0;
        }

        .badges {
          display: flex;
        }

        .badge {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-weight: 600;
        }

        /* Animation */
        .wow.fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (min-width: 1200px) {
          .container {
            max-width: 1000px;
          }

          .form-title {
            font-size: 2.2rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .section__padding {
            padding: 60px 0;
          }

          .form-title {
            font-size: 1.7rem;
            letter-spacing: 1.5px;
          }

          .partner-form {
            padding: 35px;
          }

          .form-row {
            gap: 25px;
          }
        }

        @media (max-width: 767px) {
          .section__padding {
            padding: 50px 0;
          }

          .form-title {
            font-size: 1.4rem;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            line-height: 1.3;
          }

          .partner-form {
            padding: 25px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }

          .submit-btn {
            width: 100%;
            padding: 14px 20px;
          }

          .certification-badges {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .section__padding {
            padding: 40px 0;
          }

          .form-title {
            font-size: 1.2rem;
            letter-spacing: 0.5px;
          }

          .partner-form {
            padding: 20px;
          }

          .form-label {
            font-size: 0.9rem;
          }

          .form-input {
            padding: 10px 14px;
            font-size: 0.95rem;
          }

          .submit-btn {
            font-size: 0.95rem;
            padding: 12px 20px;
          }

          .certification-text {
            font-size: 0.85rem;
          }

          .badges {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default FilingForm;