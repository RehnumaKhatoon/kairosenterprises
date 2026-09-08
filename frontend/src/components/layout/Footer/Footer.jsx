import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
    FaFacebookF,
} from "react-icons/fa6";
import footerLogo from "../../../assets/images/logo/kairos-footer-logo.png";

import "@/styles/components/layout/footer.scss";

const Footer = () => {
    return (
        <footer className="site-footer">

            {/* Main Footer */}
            <div className="site-footer__main">
                <Container>
                    <Row className="gy-5">

                        {/* Brand */}
                        <Col lg={4} md={6}>
                            <div className="site-footer__brand">

                                <Link to="/" className="site-footer__logo" aria-label="Kairos Enterprises home">
                                    <img src={footerLogo} alt="Kairos Enterprises" />
                                </Link>

                                <p className="site-footer__description">
                                    Purpose-built digital experiences and technology that help ambitious businesses move forward.
                                </p>

                                <div className="site-footer__social">

                                    <a
                                        href="https://www.linkedin.com/in/kairos-enterprises-36a187433/"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/kairos_enterprises_official?stkn=aWdmZWg3bWV4Ymp1"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram />
                                    </a>

                                    <a
                                        href="https://wa.me/919044312362"
                                        aria-label="Whatsapp"
                                    >
                                        <FaWhatsapp />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/share/1DK117Mtt9/"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF />
                                    </a>

                                </div>

                            </div>
                        </Col>

                        {/* Company */}
                        <Col lg={2} md={6}>
                            <div className="site-footer__column">

                                <h3>Company</h3>

                                <ul>
                                    <li>
                                        <a href="/#about">About Us</a>
                                    </li>

                                    <li>
                                        <a href="/#services">Services</a>
                                    </li>

                                    <li>
                                        <a href="/#projects">Projects</a>
                                    </li>

                                    <li>
                                        <a href="/#contact">Contact</a>
                                    </li>
                                </ul>

                            </div>
                        </Col>

                        {/* Services */}
                        <Col lg={3} md={6}>
                            <div className="site-footer__column">

                                <h3>Services</h3>

                                <ul>
                                    <li>
                                        <a href="/#services">
                                            Web Development
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/#services">Software Development</a>
                                    </li>

                                    <li>
                                        <a href="/#services">Mobile Apps</a>
                                    </li>

                                    <li>
                                        <a href="/#services">UI &amp; UX</a>
                                    </li>
                                </ul>

                            </div>
                        </Col>

                        {/* Contact */}
                        <Col lg={3} md={6}>
                            <div className="site-footer__column">

                                <h3>Get In Touch</h3>

                                <div className="site-footer__contact">

                                    <a href="mailto:kairos.techsupport@gmail.com">
                                        kairos.techsupport@gmail.com
                                    </a>

                                    <a
                                        href="https://wa.me/919044312362"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-whatsapp"
                                    >
                                        +91 9044312362
                                    </a>

                                    <p>
                                        Lucknow, Uttar Pradesh,
                                        <br />
                                        India
                                    </p>

                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* Bottom Footer */}
            <div className="site-footer__bottom">
                <Container>

                    <div className="site-footer__bottom-inner">

                        <p>
                            © {new Date().getFullYear()} Kairos Enterprises.
                            All rights reserved.
                        </p>

                        <div className="site-footer__legal">
                            <a href="/legal/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
                            <a href="/legal/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            <a href="mailto:info@kairosenterprises.com">Made for meaningful progress.</a>
                        </div>

                    </div>

                </Container>
            </div>

        </footer>
    );
};

export default Footer;
