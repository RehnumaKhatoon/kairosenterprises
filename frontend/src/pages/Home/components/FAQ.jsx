import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiChevronDown,
  FiTag,
  FiCreditCard,
  FiClock,
  FiXSquare,
  FiHeadphones,
  FiArrowUpRight,
} from "react-icons/fi";

import { FaRocket } from "react-icons/fa6";

import Reveal from "./Reveal";
import kairosMark from "../../../assets/images/logo/kairos-mark.png";

const faqs = [
  {
    icon: FiTag,
    number: "01",
    question: "How much does it cost to build an app, website or software?",
    answer:
      "There is no one-size-fits-all price. The cost depends on the type of product, features, design, integrations, platforms and overall complexity. Once we understand your requirements, we can provide a project-specific estimate.",
  },
  {
    icon: FiCreditCard,
    number: "02",
    question: "How are payments structured for a project?",
    answer:
      "We follow a simple milestone-based payment structure. Payments can be divided across project initiation, the mid-development stage and final delivery.",
    payment: true,
  },
  {
    icon: FiClock,
    number: "03",
    question: "How long does it take to develop a digital product?",
    answer:
      "It depends on the scope and complexity of the project. A simple website will generally take less time than a feature-rich app or custom software platform. Before development begins, we define the scope and provide an estimated timeline with milestones.",
  },
  {
    icon: FiXSquare,
    number: "04",
    question: "Can you work with an existing app, website or software project?",
    answer:
      "No. We focus on building new digital products from the ground up, helping businesses turn their ideas into secure, scalable and high-performing solutions.",
  },
  {
    icon: FiHeadphones,
    number: "05",
    question: "Is consultation (discussion) free?",
    answer:
      "Your first telephonic discussion is free, so you can briefly share your idea, requirements and objectives with us. Once we understand what you need, we can discuss the best way to move forward.",
  },
  {
    icon: FaRocket,
    number: "06",
    question: "What will happen after my app or website is launched?",
    answer:
      "Launch is not the end of the journey. Depending on your requirements, we can continue to support your product with maintenance, bug fixes, updates, performance improvements and new features.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq" id="faq">
      <Container>
        <Row className="align-items-start gy-5">

          {/* LEFT SIDE */}
          <Col lg={4}>
            <Reveal direction="left" className="faq-intro">

              <div className="eyebrow">
                FAQ
              </div>

              <h2>
                Questions
                <br />
                <em>you may have.</em>
              </h2>

              <p>
                Here are some common questions we get asked.
                Still have questions? We're just a message away.
              </p>

              <a href="#contact" className="faq-talk">
                Let's Talk
                <FiArrowUpRight />
              </a>

              {/* Decorative K */}
              <div className="faq-orbit" aria-hidden="true">
                <div className="faq-orbit__ring faq-orbit__ring--one" />
                <div className="faq-orbit__ring faq-orbit__ring--two" />

                <div className="faq-orbit__core">
                  <img src={kairosMark} alt="" />
                </div>

                <span className="faq-orbit__dot faq-orbit__dot--one" />
                <span className="faq-orbit__dot faq-orbit__dot--two" />
                <span className="faq-orbit__dot faq-orbit__dot--three" />
              </div>

            </Reveal>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={8}>
            <div className="faq-list">

              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndex === index;

                return (
                  <Reveal
                    key={faq.number}
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                    delay={index * 0.05}
                  >
                    <button
                      type="button"
                      className="faq-item__button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-item__number">
                        {faq.number}
                      </div>

                      <div className="faq-item__icon">
                        <Icon />
                      </div>

                      <span className="faq-item__question">
                        {faq.question}
                      </span>

                      <span className="faq-item__arrow">
                        <FiChevronDown />
                      </span>
                    </button>

                    <div className="faq-item__answer">
                      <div className="faq-item__answer-inner">

                        <p>{faq.answer}</p>

                        {faq.payment && (
                          <div className="faq-payment">
                            <div>
                              <strong>40%</strong>
                              <small>
                                At the time of
                                <br />
                                project initiation
                              </small>
                            </div>

                            <span>→</span>

                            <div>
                              <strong>20%</strong>
                              <small>
                                At the mid-
                                <br />
                                development stage
                              </small>
                            </div>

                            <span>→</span>

                            <div>
                              <strong>40%</strong>
                              <small>
                                Upon final
                                <br />
                                delivery
                              </small>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                  </Reveal>
                );
              })}

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
