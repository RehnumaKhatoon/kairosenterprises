// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

// import "../../styles/pages/Contact/contact.scss";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//     });

//     const [status, setStatus] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setStatus("Sending...");

//         try {
//             const response = await fetch(
//                 "http://localhost:5000/api/contact",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 }
//             );

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.message);
//             }

//             setStatus("Message sent successfully!");

//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 service: "",
//                 message: "",
//             });
//         } catch (error) {
//             console.error(error);

//             setStatus(
//                 error.message ||
//                 "Unable to send message. Please try again."
//             );
//         }
//     };

//     return (
//         <main className="contact-page">

//             {/* HERO */}

//             <section className="contact-hero">
//                 <Container>
//                     <div className="contact-hero__content">

//                         <span>CONTACT KAIROS</span>

//                         <h1>
//                             Let's build something
//                             <br />
//                             meaningful together.
//                         </h1>

//                         <p>
//                             Have an idea, project or business challenge?
//                             Tell us about it and our team will get back to you.
//                         </p>

//                     </div>
//                 </Container>
//             </section>

//             {/* CONTACT */}

//             <section className="contact-section">
//                 <Container>

//                     <Row className="g-5">

//                         {/* LEFT */}

//                         <Col lg={5}>

//                             <div className="contact-info">

//                                 <span className="contact-info__label">
//                                     GET IN TOUCH
//                                 </span>

//                                 <h2>
//                                     Let's start a
//                                     <br />
//                                     conversation.
//                                 </h2>

//                                 <p>
//                                     Whether you want to build a website,
//                                     mobile application or custom software,
//                                     we'd love to hear from you.
//                                 </p>

//                                 <a
//                                     href="mailto:info@kairosenterprises.com"
//                                     className="contact-info__item"
//                                 >
//                                     <span className="contact-info__icon">
//                                         <FaEnvelope />
//                                     </span>

//                                     <span>
//                                         <small>Email</small>
//                                         info@kairosenterprises.com
//                                     </span>
//                                 </a>

//                                 <a
//                                     href="tel:+919999999999"
//                                     className="contact-info__item"
//                                 >
//                                     <span className="contact-info__icon">
//                                         <FaPhone />
//                                     </span>

//                                     <span>
//                                         <small>Phone</small>
//                                         +91 99999 99999
//                                     </span>
//                                 </a>

//                                 <div className="contact-info__item">
//                                     <span className="contact-info__icon">
//                                         <FaLocationDot />
//                                     </span>

//                                     <span>
//                                         <small>Office</small>
//                                         Lucknow, Uttar Pradesh, India
//                                     </span>
//                                 </div>

//                             </div>

//                         </Col>

//                         {/* FORM */}

//                         <Col lg={7}>

//                             <div className="contact-form-wrapper">

//                                 <div className="contact-form-header">
//                                     <span>PROJECT ENQUIRY</span>

//                                     <h2>
//                                         Tell us about your project.
//                                     </h2>
//                                 </div>

//                                 <form
//                                     className="contact-form"
//                                     onSubmit={handleSubmit}
//                                 >

//                                     <Row>

//                                         {/* NAME */}

//                                         <Col md={6}>
//                                             <div className="form-group">

//                                                 <label>
//                                                     Full Name *
//                                                 </label>

//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     value={formData.name}
//                                                     onChange={handleChange}
//                                                     placeholder="Enter your name"
//                                                     required
//                                                 />

//                                             </div>
//                                         </Col>

//                                         {/* EMAIL */}

//                                         <Col md={6}>
//                                             <div className="form-group">

//                                                 <label>
//                                                     Email Address *
//                                                 </label>

//                                                 <input
//                                                     type="email"
//                                                     name="email"
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                     placeholder="you@example.com"
//                                                     required
//                                                 />

//                                             </div>
//                                         </Col>

//                                         {/* PHONE */}

//                                         <Col md={6}>
//                                             <div className="form-group">

//                                                 <label>
//                                                     Phone Number
//                                                 </label>

//                                                 <input
//                                                     type="tel"
//                                                     name="phone"
//                                                     value={formData.phone}
//                                                     onChange={handleChange}
//                                                     placeholder="+91 XXXXX XXXXX"
//                                                 />

//                                             </div>
//                                         </Col>

//                                         {/* SERVICE */}

//                                         <Col md={6}>
//                                             <div className="form-group">

//                                                 <label>
//                                                     Service
//                                                 </label>

//                                                 <select
//                                                     name="service"
//                                                     value={formData.service}
//                                                     onChange={handleChange}
//                                                 >

//                                                     <option value="">
//                                                         Select a service
//                                                     </option>

//                                                     <option value="Web Development">
//                                                         Web Development
//                                                     </option>

//                                                     <option value="App Development">
//                                                         App Development
//                                                     </option>

//                                                     <option value="Software Development">
//                                                         Software Development
//                                                     </option>

//                                                     <option value="UI/UX Design">
//                                                         UI/UX Design
//                                                     </option>

//                                                     <option value="Other">
//                                                         Other
//                                                     </option>

//                                                 </select>

//                                             </div>
//                                         </Col>

//                                         {/* MESSAGE */}

//                                         <Col xs={12}>

//                                             <div className="form-group">

//                                                 <label>
//                                                     Message *
//                                                 </label>

//                                                 <textarea
//                                                     name="message"
//                                                     rows="6"
//                                                     value={formData.message}
//                                                     onChange={handleChange}
//                                                     placeholder="Tell us about your project..."
//                                                     required
//                                                 />

//                                             </div>

//                                         </Col>

//                                     </Row>

//                                     <button
//                                         type="submit"
//                                         className="contact-form__submit"
//                                         disabled={status === "Sending..."}
//                                     >
//                                         {status === "Sending..."
//                                             ? "Sending..."
//                                             : "Send Message"}
//                                     </button>

//                                     {status && (
//                                         <p className="contact-form__status">
//                                             {status}
//                                         </p>
//                                     )}

//                                 </form>

//                             </div>

//                         </Col>

//                     </Row>

//                 </Container>
//             </section>

//         </main>
//     );
// };

// export default Contact;