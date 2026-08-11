import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiCloud, FiCode, FiLayers, FiPenTool, FiRefreshCw, FiSmartphone } from "react-icons/fi";
import Reveal from "./Reveal";

const services = [
    { icon: FiCode, title: "Web Development", text: "High-performance websites and web applications engineered to convert and scale." },
    { icon: FiLayers, title: "Software Development", text: "Purpose-built software that streamlines operations and unlocks business value." },
    { icon: FiSmartphone, title: "Mobile App Development", text: "Intuitive mobile experiences designed around the people who use them." },
    { icon: FiCloud, title: "Cloud & DevOps", text: "Secure cloud foundations, automated delivery and resilient infrastructure." },
    { icon: FiPenTool, title: "UI/UX Design", text: "Research-led interfaces that make complex products feel beautifully simple." },
    { icon: FiRefreshCw, title: "Digital Transformation", text: "Practical technology roadmaps that modernize and future-proof your business." },
];

const ServicesSection = () => {
    return (
        <section className="section services" id="services">
            <Container>
                <Reveal className="section-heading section-heading--split"><div><div className="eyebrow eyebrow--light">Our expertise</div><h2>Everything you need to<br /><em>build what’s next.</em></h2></div><p>From first idea to continuous improvement, our multidisciplinary team delivers the technology your business needs to move with confidence.</p></Reveal>
                <Row className="g-3 g-lg-4">
                    {services.map((service, index) => { const Icon = service.icon; return <Col md={6} lg={4} key={service.title}><Reveal className="service-card" delay={(index%3)*.08}><div className="service-card__top"><span className="service-card__number">0{index+1}</span><Icon className="service-card__icon" /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <FiArrowUpRight /></a></Reveal></Col> })}
                </Row>
            </Container>
        </section>
    )
}

export default ServicesSection;
