import { Container } from "react-bootstrap";
import {
    FiSearch,
    FiClipboard,
    FiCode,
    // FiRocket,
    FiShield
} from "react-icons/fi";
import Reveal from "./Reveal";
import { FaRocket } from "react-icons/fa6";

const steps = [
    [
        "01",
        "Discover",
        "We understand your idea, business goals and what you want to achieve.",
        FiSearch,
    ],
    [
        "02",
        "Plan",
        "We define the features, scope and technology needed to turn your idea into a clear plan.",
        FiClipboard,
    ],
    [
        "03",
        "Build",
        "Our team designs, develops and tests your product with regular communication along the way.",
        FiCode,
    ],
    [
        "04",
        "Launch & Grow",
        "We launch your product, support you after release and help you improve as your business grows.",
        FaRocket,
    ],
];

const ProcessSection = () => {
    return (
        <section className="section process">

            <Container>

                {/* Heading */}
                <Reveal className="section-heading section-heading--center">

                    <div className="eyebrow">
                        HOW WE WORK
                    </div>

                    <h2>
                        From idea to launch,
                        <br />
                        <em>we build it together.</em>
                    </h2>

                    <p>
                        A simple, transparent process designed to turn your
                        idea into a digital product that makes an impact.
                    </p>

                </Reveal>


                {/* Process */}
                <div className="process-line">

                    {steps.map(
                        ([number, title, text, Icon], index) => (

                            <Reveal
                                className="process-step"
                                delay={index * 0.1}
                                key={title}
                            >

                                <span className="process-step__number">
                                    {number}
                                </span>

                                <div className="process-step__icon">
                                    <Icon />
                                </div>

                                <h3>
                                    {title}
                                </h3>

                                <span className="process-step__underline" />

                                <p>
                                    {text}
                                </p>

                            </Reveal>

                        )
                    )}

                </div>


                {/* Bottom message */}
                <Reveal className="process-note">

                    <div className="process-note__icon">
                        <FiShield />
                    </div>

                    <div>
                        <strong>
                            You stay informed at every stage.
                        </strong>

                        <span>
                            Clear communication. No unnecessary complexity.
                        </span>
                    </div>

                </Reveal>

            </Container>

        </section>
    );
};

export default ProcessSection;