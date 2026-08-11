import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

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

                                <Link to="/" className="site-footer__logo"><b>K</b><span>KAIROS<small>ENTERPRISES</small></span></Link>

                                <p className="site-footer__description">
                                    Purpose-built digital experiences and technology that help ambitious businesses move forward.
                                </p>

                                <div className="site-footer__social">

                                    <a
                                        href="https://www.linkedin.com/"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram />
                                    </a>

                                    <a
                                        href="https://wa.me/919999999999"
                                        aria-label="Whatsapp"
                                    >
                                        <FaWhatsapp />
                                    </a>

                                    <a
                                        href="https://x.com/"
                                        aria-label="X"
                                    >
                                        <FaXTwitter />
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
                                        <a href="/#about">About</a>
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
                                        <a href="/#services">Cloud &amp; DevOps</a>
                                    </li>
                                </ul>

                            </div>
                        </Col>

                        {/* Contact */}
                        <Col lg={3} md={6}>
                            <div className="site-footer__column">

                                <h3>Get In Touch</h3>

                                <div className="site-footer__contact">

                                    <a href="mailto:info@kairosenterprises.com">
                                        info@kairosenterprises.com
                                    </a>

                                    <a href="tel:+919999999999">
                                        +91 99999 99999
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

                        <div className="site-footer__legal"><a href="mailto:info@kairosenterprises.com">Made for meaningful progress.</a></div>

                    </div>

                </Container>
            </div>

        </footer>
    );
};

export default Footer;
