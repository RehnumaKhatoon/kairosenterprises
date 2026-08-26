import { Container, Row, Col } from "react-bootstrap";
import {
    FiZap,
    FiSettings,
    FiMessageCircle,
    FiHeadphones,
} from "react-icons/fi";
import Reveal from "./Reveal";

const features = [
    {
        icon: FiZap,
        title: "Understand Before We Build",
        text: "We start by understanding your idea, business and goals—not just your technical requirements.",
        color: "green",
    },
    {
        icon: FiSettings,
        title: "Built Around Your Needs",
        text: "We don't force your business into a fixed solution. We build technology around the way you actually work.",
        color: "purple",
    },
    {
        icon: FiMessageCircle,
        title: "Clear & Transparent",
        text: "Clear communication, straightforward discussions and no unnecessary technical complexity. You know what we're building and why.",
        color: "orange",
    },
    {
        icon: FiHeadphones,
        title: "Support Beyond Launch",
        text: "Launching your product is just the beginning. We remain available to help you improve, maintain and grow it.",
        color: "blue",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="section why" id="why-choose-us">
            <Container>
                <Row className="align-items-center gy-5">

                    {/* LEFT CONTENT */}
                    <Col lg={4}>
                        <Reveal direction="left">

                            <div className="why__intro">

                                <div className="eyebrow">
                                    WHY KAIROS
                                </div>

                                <h2>
                                    More than
                                    <br />
                                    development.
                                    <br />
                                    <em>A partner for</em>
                                    <br />
                                    <em>your idea.</em>
                                </h2>

                                <p className="why__description">
                                    We believe technology should make your
                                    business simpler, not more complicated.
                                    From the first conversation to the final
                                    launch, we keep the process clear,
                                    collaborative and focused on what matters
                                    to you.
                                </p>

                                {/* K VISUAL */}
                                <div className="why-visual">

                                    <div className="why-visual__orbit why-visual__orbit--one">
                                        <span />
                                    </div>

                                    <div className="why-visual__orbit why-visual__orbit--two">
                                        <span />
                                    </div>

                                    <div className="why-visual__core">
                                        K
                                    </div>

                                    <i className="dot dot--green" />
                                    <i className="dot dot--purple" />
                                    <i className="dot dot--orange" />

                                    <div className="why-visual__label">
                                        IDEA
                                        <span>→</span>
                                        REALITY
                                    </div>

                                </div>

                            </div>

                        </Reveal>
                    </Col>

                    {/* RIGHT CARDS */}
                    <Col lg={8}>
                        <div className="why-grid">

                            {features.map(
                                (
                                    {
                                        icon: Icon,
                                        title,
                                        text,
                                        color,
                                    },
                                    index
                                ) => (
                                    <Reveal
                                        key={title}
                                        className={`why-card why-card--${color}`}
                                        delay={index * 0.08}
                                    >

                                        <div className="why-card__header">

                                            <div className="why-card__icon">
                                                <Icon />
                                            </div>

                                            <span className="why-card__number">
                                                0{index + 1}
                                            </span>

                                        </div>

                                        <div className="why-card__content">

                                            <h3>{title}</h3>

                                            <p>{text}</p>

                                        </div>

                                    </Reveal>
                                )
                            )}

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseUs; 