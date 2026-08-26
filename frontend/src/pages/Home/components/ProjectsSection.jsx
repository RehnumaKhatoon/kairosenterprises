import { Container } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiUsers,
  FiPhoneCall,
  FiShoppingCart,
  FiMapPin,
} from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    icon: FiUsers,
    title: "Matrimonial Platform",
    text: "A feature-rich platform designed to help people discover, connect and find meaningful matches.",
    tags: ["Profiles", "Matching", "Search", "Membership"],
    className: "project--matrimonial",
  },
  {
    number: "02",
    icon: FiPhoneCall,
    title: "One-on-One Calling Platform",
    text: "A social calling platform designed for direct one-on-one voice and video conversations.",
    tags: ["Voice Calls", "Video Calls", "Match", "Profiles"],
    className: "project--calling",
  },
  {
    number: "03",
    icon: FiShoppingCart,
    title: "E-Commerce Platform",
    text: "A complete online shopping experience connecting customers with products through a seamless digital storefront.",
    tags: ["Products", "Cart", "Payments", "Orders"],
    className: "project--commerce",
  },
  {
    number: "04",
    icon: FiMapPin,
    title: "On-Demand Delivery Platform",
    text: "A digital platform designed to simplify ordering, tracking and delivery from business to customer.",
    tags: ["Orders", "Tracking", "Delivery", "Management"],
    className: "project--delivery",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section projects" id="projects">
      <Container>

        {/* Heading */}
        <Reveal className="projects-heading">
          <div>
            <div className="eyebrow eyebrow--light">
              WHAT WE'VE BUILT
            </div>

            <h2>
              Products we've built.
              <br />
              <em>Ideas we can build for you.</em>
            </h2>

            <p>
              Explore some of the digital products we've developed
              across different industries. Have something similar
              in mind? We can customize the experience around your
              business, audience and goals.
            </p>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.title}
                className={`product-card ${project.className}`}
                delay={index * 0.08}
              >
                {/* Left content */}
                <div className="product-card__content">

                  <span className="product-card__number">
                    {project.number}
                  </span>

                  <div className="product-card__icon">
                    <Icon />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <div className="product-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </div>

                {/* Product visual */}
                <div className="product-card__visual">
                  <div className="phone">

                    <div className="phone__notch" />

                    <div className="phone__screen">

                      <div className="phone__header">
                        <span />
                        <span />
                      </div>

                      <div className="phone__avatar" />

                      <div className="phone__lines">
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="phone__blocks">
                        <i />
                        <i />
                        <i />
                      </div>

                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="product-card__arrow"
                  aria-label={`View ${project.title}`}
                >
                  <FiArrowUpRight />
                </a>
              </Reveal>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default ProjectsSection;