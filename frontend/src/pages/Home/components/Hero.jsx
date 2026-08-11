import { Container, Row, Col } from "react-bootstrap";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiCheck, FiLayers, FiZap } from "react-icons/fi";

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
                            <motion.div className="eyebrow eyebrow--light" variants={itemVariants}>Innovation <span /> Technology <span /> Growth</motion.div>
                            <motion.h1 className="hero__title" variants={itemVariants}>Building digital solutions that <em>move businesses forward.</em></motion.h1>
                            <motion.p className="hero__description" variants={itemVariants}>We turn ambitious ideas into secure, scalable digital products—combining strategy, design and engineering in one focused team.</motion.p>
                            <motion.div className="hero__buttons" variants={itemVariants}>
                                <a href="#services" className="button button--primary">Explore our services <FiArrowUpRight /></a>
                                <a href="#contact" className="button button--ghost">Get in touch <FiArrowUpRight /></a>
                            </motion.div>
                            <motion.div className="hero__proof" variants={itemVariants}><div className="hero__avatars" aria-hidden="true"><span>AK</span><span>MS</span><span>RJ</span></div><p><strong>Trusted delivery, human partnership.</strong><br />Built for teams ready to grow.</p></motion.div>
                        </motion.div>
                    </Col>
                    <Col lg={5} xl={5}>
                        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: .9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .35 }}>
                            <div className="hero-visual__orbit" aria-hidden="true"><span /><span /><span /></div>
                            <div className="hero-visual__panel"><div className="hero-visual__top"><span><i /> Live system</span><span>Q3 / 2026</span></div><div className="hero-visual__metric"><small>Growth velocity</small><strong>+47.8%</strong><span>↑ 12.4 this month</span></div><div className="hero-visual__chart" aria-label="Rising performance chart"><i/><i/><i/><i/><i/><i/><i/></div><div className="hero-visual__bottom"><span><FiCheck /> Secure</span><span><FiZap /> Fast</span><span><FiLayers /> Scalable</span></div></div>
                            <div className="hero-visual__float hero-visual__float--a"><FiZap /><span><small>Performance</small>99.9% uptime</span></div>
                            <div className="hero-visual__float hero-visual__float--b"><span>50+</span><small>Products shipped</small></div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <a className="hero__scroll" href="#about" aria-label="Scroll to about"><span /> Scroll to explore</a>
        </section>
    );
};

export default Hero;
