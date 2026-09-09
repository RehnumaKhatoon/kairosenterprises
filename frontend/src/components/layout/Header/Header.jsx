import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import kairosLogo from "../../../assets/images/logo/kairos-enterprises-logo.png";

import "../../../styles/components/layout/header.scss";

const scrollToSection = (id, navigateHome) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (navigateHome) {
        window.location.href = `/#${id}`;
    }
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setExpanded(false);
        scrollToSection(id, location.pathname !== "/");
    };

    return (
        <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
            <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="site-header__navbar">
                <Container className="site-header__container">
                    <Navbar.Brand as={Link} to="/" className="site-header__brand" aria-label="Kairos Enterprises home">
                        <img src={kairosLogo} alt="Kairos Enterprises" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="kairos-navbar" className="site-header__toggle"><span /><span /><span /></Navbar.Toggle>
                    <Navbar.Collapse id="kairos-navbar">
                        <Nav className="site-header__nav ms-auto">
                            {[['home', 'Home'], ['about', 'About Us'], ['projects', 'Projects'], ['industries', 'Industries'], ['services', 'Services'], ['faq', 'FAQ\'s']].map(([id, label]) => <button key={id} type="button" onClick={() => go(id)} className="site-header__link">{label}</button>)}
                            <button type="button" onClick={() => go("contact")} className="site-header__cta">Let’s talk <FiArrowUpRight /></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
