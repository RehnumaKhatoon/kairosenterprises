import { Container } from "react-bootstrap";
import { FiArrowUpRight, FiMessageCircle, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";

const CTASection = () => (
  <section className="cta" id="contact">
    <Container>
      <Reveal className="cta__inner">

        {/* Decorative background */}
        <div className="cta__glow cta__glow--left" />
        <div className="cta__glow cta__glow--right" />
        <div className="cta__rings" />

        <div className="cta__content">

          <div className="eyebrow eyebrow--light">
            <span></span>
            YOUR NEXT MOVE
            <span></span>
          </div>

          <h2>
            Let’s build something
            <br />
            <em>extraordinary together.</em>
          </h2>

          <p>
            Tell us what you’re working toward. We’ll bring the strategy,
            craft and technology to help you get there.
          </p>

          <div className="cta__buttons">
            <a
              href="mailto:info@kairosenterprises.com"
              className="button button--primary"
            >
              <FiSend />
              Start a project
              <FiArrowUpRight />
            </a>

            <a
              href="https://wa.me/919044312362"
              className="button button--outline"
            >
              <FiMessageCircle />
              Contact us
              <FiArrowUpRight />
            </a>
          </div>

          <div className="cta__note">
            <span>✦</span>
            Not sure where to start? That’s okay.
            <a href="#contact"> Start with a conversation.</a>
          </div>

        </div>
      </Reveal>
    </Container>
  </section>
);

export default CTASection;