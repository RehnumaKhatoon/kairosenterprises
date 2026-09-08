import { Container, Row, Col } from "react-bootstrap";
import { motion, useReducedMotion } from "motion/react";
// import { FiArrowUpRight, FiCheck, FiLayers, FiZap } from "react-icons/fi";
import {
    FiArrowUpRight,
    FiSun,
    FiEdit3,
    FiCode,
    FiZap,
    FiTrendingUp,
} from "react-icons/fi";
import kairosMark from "../../../assets/images/logo/kairos-mark.png";

const Hero = () => {
    const reduceMotion = useReducedMotion();
    const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } } };

    return <HeroContent reduceMotion={reduceMotion} itemVariants={itemVariants} />;
};

const HeroContent = ({ reduceMotion, itemVariants }) => {
    return (
        <section className="hero" id="home">
            <div className="hero__grid" aria-hidden="true" />
            <div className="hero__glow hero__glow--one" aria-hidden="true" />
            <div className="hero__glow hero__glow--two" aria-hidden="true" />
            <Container className="hero__container">
                <Row className="align-items-center gy-5">
                    <Col lg={7} xl={7}>
                        <motion.div className="hero__content" initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.11 } } }}>
                            <motion.div className="eyebrow eyebrow--light" variants={itemVariants}>IDEAS <span /> TECHNOLOGY <span /> GROWTH</motion.div>
                            <motion.h1 className="hero__title" variants={itemVariants}>The right time to build your next <em>Digital Product is now.</em></motion.h1>
                            <motion.p className="hero__description" variants={itemVariants}>From websites and mobile apps to complete digital platforms, we turn business ideas into practical, scalable technology designed to help you launch, grow and succeed.</motion.p>
                            <motion.div className="hero__buttons" variants={itemVariants}>
                                <a href="#services" className="button button--primary">Build Your Idea <FiArrowUpRight /></a>
                                <a href="#contact" className="button button--ghost">Let’s Talk <FiArrowUpRight /></a>
                            </motion.div>
                            {/* <motion.div className="hero__proof" variants={itemVariants}><div className="hero__avatars" aria-hidden="true"><span>AK</span><span>MS</span><span>RJ</span></div><p><strong>Trusted delivery, human partnership.</strong><br />Built for teams ready to grow.</p></motion.div> */}
                        </motion.div>
                    </Col>
                    {/* <Col lg={5} xl={5}>
                        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: .9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .35 }}>
                            <div className="hero-visual__orbit" aria-hidden="true"><span /><span /><span /></div>
                            <div className="hero-visual__panel"><div className="hero-visual__top"><span><i /> Live system</span><span>Q3 / 2026</span></div><div className="hero-visual__metric"><small>Growth velocity</small><strong>+47.8%</strong><span>↑ 12.4 this month</span></div><div className="hero-visual__chart" aria-label="Rising performance chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="hero-visual__bottom"><span><FiCheck /> Secure</span><span><FiZap /> Fast</span><span><FiLayers /> Scalable</span></div></div>
                            <div className="hero-visual__float hero-visual__float--a"><FiZap /><span><small>Performance</small>99.9% uptime</span></div>
                            <div className="hero-visual__float hero-visual__float--b"><span>50+</span><small>Products shipped</small></div>
                        </motion.div>
                    </Col>  */}
                    <Col lg={5} xl={5}>
                        <motion.div
                            className="process-visual"
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, scale: 0.9, x: 40 }
                            }
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.35,
                            }}
                        >
                            {/* Orbit */}
                            <div className="process-visual__orbit">
                                <span className="orbit-dot orbit-dot--1" />
                                <span className="orbit-dot orbit-dot--2" />
                                <span className="orbit-dot orbit-dot--3" />
                                <span className="orbit-dot orbit-dot--4" />
                                <span className="orbit-dot orbit-dot--5" />
                            </div>

                            {/* Center */}
                            <div className="process-center">
                                <div className="process-center__logo">
                                    <img src={kairosMark} alt="Kairos Enterprises" />
                                </div>

                                <h3>KAIROS</h3>
                                <span>ENTERPRISES</span>

                                <p>
                                    Turning Ideas Into
                                    <br />
                                    Impactful Digital Solutions
                                </p>
                            </div>

                            {/* 01 IDEA */}
                            <div className="process-card process-card--idea">
                                <div className="process-card__icon">
                                    <FiSun />
                                </div>

                                <div>
                                    <small>01</small>
                                    <h4>IDEA</h4>
                                    <p>
                                        We understand your idea
                                        and business goals.
                                    </p>
                                </div>
                            </div>

                            {/* 02 DESIGN */}
                            <div className="process-card process-card--design">
                                <div className="process-card__icon">
                                    <FiEdit3 />
                                </div>

                                <div>
                                    <small>02</small>
                                    <h4>DESIGN</h4>
                                    <p>
                                        We design intuitive
                                        experiences that users love.
                                    </p>
                                </div>
                            </div>

                            {/* 03 BUILD */}
                            <div className="process-card process-card--build">
                                <div className="process-card__icon">
                                    <FiCode />
                                </div>

                                <div>
                                    <small>03</small>
                                    <h4>BUILD</h4>
                                    <p>
                                        We develop scalable,
                                        secure solutions.
                                    </p>
                                </div>
                            </div>

                            {/* 04 LAUNCH */}
                            <div className="process-card process-card--launch">
                                <div className="process-card__icon">
                                    <FiZap />
                                </div>

                                <div>
                                    <small>04</small>
                                    <h4>LAUNCH</h4>
                                    <p>
                                        We test, refine and
                                        launch with confidence.
                                    </p>
                                </div>
                            </div>

                            {/* 05 GROW */}
                            <div className="process-card process-card--grow">
                                <div className="process-card__icon">
                                    <FiTrendingUp />
                                </div>

                                <div>
                                    <small>05</small>
                                    <h4>GROW</h4>
                                    <p>
                                        We help you scale and
                                        achieve long-term growth.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <a className="hero__scroll" href="#about" aria-label="Scroll to about"><span /> Scroll to explore</a>
        </section>
    );
};

export default Hero;
