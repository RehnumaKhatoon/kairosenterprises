import { Container, Row, Col } from "react-bootstrap";
import { FaRocket } from "react-icons/fa6";
import {
    FiArrowUpRight,
    FiCheckCircle,
    FiSmartphone,
    FiGlobe,
    FiShoppingCart,
    FiCode,
    FiLayers,
    FiTarget,
    FiUsers,
    FiBarChart2,
    FiHeadphones,

} from "react-icons/fi";

import Reveal from "./Reveal";
import kairosMark from "../../../assets/images/logo/kairos-mark.png";

const AboutPreview = () => {
    return (
        <section className="section about" id="about">
            <Container>
                <Row className="align-items-center gy-5 gx-xl-5">

                    {/* ================= LEFT GRAPHIC ================= */}
                    <Col lg={6}>
                        <Reveal direction="left" className="about-visual">

                            <div className="about-visual__main">

                                {/* Background rings */}
                                <div className="about-visual__rings">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                {/* Orbit lines */}
                                <div className="about-visual__orbit about-visual__orbit--1">
                                    <i></i>
                                </div>

                                <div className="about-visual__orbit about-visual__orbit--2">
                                    <i></i>
                                </div>

                                {/* Center */}
                                <div className="about-visual__center">
                                    <div className="about-visual__logo">
                                        <img src={kairosMark} alt="Kairos Enterprises" />
                                    </div>
                                </div>

                                {/* Mobile Apps */}
                                <div className="about-node about-node--top">
                                    <div className="about-node__icon">
                                        <FiSmartphone />
                                    </div>

                                    <strong>Mobile Apps</strong>
                                </div>

                                {/* Websites */}
                                <div className="about-node about-node--left">
                                    <div className="about-node__icon">
                                        <FiGlobe />
                                    </div>

                                    <strong>Websites</strong>
                                </div>

                                {/* E-Commerce */}
                                <div className="about-node about-node--right">
                                    <div className="about-node__icon">
                                        <FiShoppingCart />
                                    </div>

                                    <strong>E-Commerce</strong>
                                </div>

                                {/* Custom Software */}
                                <div className="about-node about-node--bottom-left">
                                    <div className="about-node__icon">
                                        <FiCode />
                                    </div>

                                    <strong>Custom Software</strong>
                                </div>

                                {/* Digital Platforms */}
                                <div className="about-node about-node--bottom-right">
                                    <div className="about-node__icon">
                                        <FiLayers />
                                    </div>

                                    <strong>Digital Platforms</strong>
                                </div>

                                {/* Floating card */}
                                <div className="about-visual__floating">
                                    <div className="about-visual__floating-icon">
                                        <FaRocket />
                                    </div>

                                    <div>
                                        <strong>IDEA → DIGITAL PRODUCT</strong>
                                        <span>From concept to launch</span>
                                    </div>
                                </div>

                            </div>

                        </Reveal>
                    </Col>

                    {/* ================= RIGHT CONTENT ================= */}
                    <Col lg={6}>
                        <Reveal direction="right" className="about__content">

                            <div className="eyebrow">
                                WHO WE ARE
                            </div>

                            <h2>
                                Where business ideas become{" "}
                                <em>Digital Reality.</em>
                            </h2>

                            <p className="lead">
                                Kairos Enterprises is a digital solutions
                                company that helps businesses turn ideas,
                                challenges and opportunities into practical
                                digital products.
                            </p>

                            <p>
                                From websites and mobile apps to custom
                                platforms and business solutions, we combine
                                strategy, design and technology to build
                                digital products that are practical,
                                scalable and ready for the real world.
                            </p>

                            {/* Feature boxes */}
                            <div className="about__features">

                                <div className="about-feature">
                                    <span>
                                        <FiTarget />
                                    </span>

                                    <div>
                                        <strong>Practical Solutions</strong>
                                        <small>
                                            Technology built around your
                                            business needs.
                                        </small>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <span>
                                        <FiUsers />
                                    </span>

                                    <div>
                                        <strong>Transparent Process</strong>
                                        <small>
                                            Clear communication from idea
                                            to launch.
                                        </small>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <span>
                                        <FiBarChart2 />
                                    </span>

                                    <div>
                                        <strong>Scalable Technology</strong>
                                        <small>
                                            Built to grow as your business
                                            grows.
                                        </small>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <span>
                                        <FiHeadphones />
                                    </span>

                                    <div>
                                        <strong>Ongoing Support</strong>
                                        <small>
                                            We stay connected beyond the
                                            launch.
                                        </small>
                                    </div>
                                </div>

                            </div>

                            <a href="#contact" className="text-link">
                                See How We Can Help
                                <FiArrowUpRight />
                            </a>

                        </Reveal>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default AboutPreview;
