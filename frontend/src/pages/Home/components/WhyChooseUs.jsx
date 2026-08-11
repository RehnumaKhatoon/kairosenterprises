import { Container, Row, Col } from "react-bootstrap";
import { FiCompass, FiMaximize, FiUsers, FiZap } from "react-icons/fi";
import Reveal from "./Reveal";

const features = [
    [FiZap, "Innovation first", "We apply emerging technology where it creates genuine advantage—not noise."],
    [FiMaximize, "Scalable by design", "Architecture and experiences created to grow with your customers and ambitions."],
    [FiCompass, "Experienced team", "Direct access to senior specialists who understand both business and technology."],
    [FiUsers, "Client-centric", "Clear communication, shared ownership and progress you can see at every step."],
];

const WhyChooseUs = () => {
    return (
        <section className="section why" id="why-choose-us">
            <Container>
                <Row className="align-items-center gy-5 gx-xl-5">
                    <Col lg={5}><Reveal direction="left"><div className="eyebrow">Why Kairos</div><h2>Big-picture thinking.<br /><em>Built-in precision.</em></h2><p className="lead">The right technology partner should make progress feel clear, not complicated.</p><div className="why-visual" aria-hidden="true"><div className="why-visual__core">K<span>Digital clarity</span></div><i/><i/><i/></div></Reveal></Col>
                    <Col lg={7}><div className="why-grid">{features.map(([Icon,title,text], index) => <Reveal className="why-card" delay={index*.07} key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChooseUs;
