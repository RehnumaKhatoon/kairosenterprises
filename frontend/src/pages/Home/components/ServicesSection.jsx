import { Container, Row, Col } from "react-bootstrap";
import {
    FiArrowUpRight,
    FiCode,
    FiLayers,
    FiSmartphone,
    FiPenTool,
} from "react-icons/fi";

import Reveal from "./Reveal";

const services = [
    {
        number: "01",
        icon: FiCode,
        title: "Web Development",
        text: "Fast, responsive websites and web applications designed to represent your business and deliver real results.",
        tags: ["Websites", "Web Apps", "Portals", "E-commerce"],
    },
    {
        number: "02",
        icon: FiLayers,
        title: "Software Development",
        text: "Custom software built around your business processes, helping you simplify operations and solve problems efficiently.",
        tags: ["Business Software", "Admin Panels", "Custom Systems"],
    },
    {
        number: "03",
        icon: FiSmartphone,
        title: "Mobile App Development",
        text: "User-friendly Android and iOS apps built to turn your idea into a practical, engaging digital experience.",
        tags: ["Android", "iOS", "Cross-platform Apps"],
    },
    {
        number: "04",
        icon: FiPenTool,
        title: "UI/UX Design",
        text: "Clean, intuitive interfaces and user experiences designed to make your digital product easier and more enjoyable to use.",
        tags: ["Web Design", "App Design", "Product UX"],
    },
];

const ServicesSection = () => {
    return (
        <section className="section services" id="services">
            <Container>

                {/* ================= HEADING ================= */}

                <Reveal className="services-heading">

                    <div className="services-heading__left">

                        <div className="eyebrow eyebrow--light">
                            WHAT WE DO
                        </div>

                        <h2>
                            We build the technology
                            <br />
                            your <em>business needs.</em>
                        </h2>

                    </div>

                    <p className="services-heading__description">
                        Whether you need a business website, custom software,
                        a mobile app or a user experience designed from the
                        ground up, we build practical digital solutions
                        around your goals.
                    </p>

                </Reveal>

                {/* ================= SERVICES ================= */}

                <Row className="g-3 g-lg-4">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <Col md={6} key={service.title}>

                                <Reveal
                                    className="service-card"
                                    delay={index * 0.08}
                                >

                                    {/* Top */}

                                    <div className="service-card__top">

                                        <span className="service-card__number">
                                            {service.number}
                                        </span>

                                        <FiArrowUpRight className="service-card__arrow" />

                                    </div>

                                    {/* Main */}

                                    <div className="service-card__body">

                                        <div className="service-card__icon-wrap">
                                            <Icon className="service-card__icon" />
                                        </div>

                                        <div className="service-card__content">

                                            <h3>
                                                {service.title}
                                            </h3>

                                            <p>
                                                {service.text}
                                            </p>

                                            {/* Tags */}

                                            <div className="service-card__tags">

                                                {service.tags.map((tag) => (
                                                    <span key={tag}>
                                                        {tag}
                                                    </span>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                    {/* Bottom */}

                                    <div className="service-card__footer">

                                        <a href="#contact">
                                            Discuss Your Project
                                            <FiArrowUpRight />
                                        </a>

                                    </div>

                                </Reveal>

                            </Col>
                        );
                    })}

                </Row>

            </Container>
        </section>
    );
};

export default ServicesSection;