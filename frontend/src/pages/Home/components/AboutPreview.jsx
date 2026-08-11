import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";

const AboutPreview = () => {
    return (
        <section className="section about" id="about">
            <Container>
                <Row className="align-items-center gy-5 gx-xl-5">
                    <Col lg={6}>
                        <Reveal direction="left" className="about-visual">
                            <div className="about-visual__main" role="img" aria-label="Abstract digital product architecture visualization">
                                <div className="about-visual__grid" />
                                <div className="about-visual__ring"><span>K</span></div>
                                <div className="about-visual__line about-visual__line--one" />
                                <div className="about-visual__line about-visual__line--two" />
                                <div className="about-visual__tag">Strategy / Design / Engineering</div>
                            </div>
                            <div className="about-visual__card"><strong>10+</strong><span>Years of<br />digital craft</span></div>
                        </Reveal>
                    </Col>
                    <Col lg={6}>
                        <Reveal direction="right" className="about__content">
                            <div className="eyebrow">Who we are</div>
                            <h2>Technology with purpose.<br /><em>Partnership with momentum.</em></h2>
                            <p className="lead">Kairos is a digital solutions company for businesses that refuse to stand still.</p>
                            <p>We unite business thinking, thoughtful design and dependable engineering to create digital experiences that solve real problems—and keep creating value as you scale.</p>
                            <div className="about__checks"><span><FiCheckCircle /> Senior, hands-on expertise</span><span><FiCheckCircle /> Transparent delivery</span><span><FiCheckCircle /> Built for long-term scale</span></div>
                            <a href="#services" className="text-link">Discover our expertise <FiArrowUpRight /></a>
                        </Reveal>
                    </Col>
                </Row>
                <div className="stats-grid">
                    {[['10+','Years experience'],['50+','Projects delivered'],['30+','Happy clients'],['99%','Client satisfaction']].map(([value,label], index) => <Reveal className="stat" delay={index*.08} key={label}><strong>{value}</strong><span>{label}</span></Reveal>)}
                </div>
            </Container>
        </section>
    )
}

export default AboutPreview;
