import { Container } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const CTASection = () => (
  <section className="cta" id="contact">
    <Container>
      <Reveal className="cta__inner">
        <div className="cta__rings" aria-hidden="true" />
        <div className="eyebrow eyebrow--light">Your next move</div>
        <h2>
          Let’s build something
          <br />
          <em>extraordinary together.</em>
        </h2>
        <p>
          Tell us what you’re working toward. We’ll bring the strategy, craft
          and technology to help you get there.
        </p>
        <div className="cta__buttons">
          <a
            href="mailto:info@kairosenterprises.com"
            className="button button--light"
          >
            Start a project <FiArrowUpRight />
          </a>
          <a href="tel:+919999999999" className="button button--ghost">
            Contact us <FiArrowUpRight />
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);

export default CTASection;
