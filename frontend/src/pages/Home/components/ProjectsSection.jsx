import { Container } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiUsers,
  FiPhoneCall,
  FiShoppingCart,
  FiMapPin,
  FiHeart,
  FiBookOpen,
  FiCompass,
  FiRadio,
} from "react-icons/fi";
import Reveal from "./Reveal";
import matrimonialImage from "../../../assets/images/projects/matrimonial-platform.jpeg";
import callingImage from "../../../assets/images/projects/calling-platform.jpeg";
import ecommerceImage from "../../../assets/images/projects/ecommerce-platform.jpeg";
import healthImage from "../../../assets/images/projects/health-platform.jpeg";
import astrologyImage from "../../../assets/images/projects/astrology-platform.jpeg";
import elearningImage from "../../../assets/images/projects/elearning-platform.jpeg";
import newsImage from "../../../assets/images/projects/news-platform.jpeg";
import rideImage from "../../../assets/images/projects/ride-platform.jpeg";

const projects = [
  {
    number: "01",
    icon: FiUsers,
    title: "Matrimonial Platform",
    text: "A feature-rich platform designed to help people discover, connect and find meaningful matches.",
    tags: ["Profiles", "Matching", "Search", "Membership"],
    className: "project--matrimonial",
    image: matrimonialImage,
  },
  {
    number: "02",
    icon: FiPhoneCall,
    title: "One-on-One Calling Platform",
    text: "A social calling platform designed for direct one-on-one voice and video conversations.",
    tags: ["Voice Calls", "Video Calls", "Match", "Profiles"],
    className: "project--calling",
    image: callingImage,
  },
  {
    number: "03",
    icon: FiShoppingCart,
    title: "E-Commerce Platform",
    text: "A complete online shopping experience connecting customers with products through a seamless digital storefront.",
    tags: ["Products", "Cart", "Payments", "Orders"],
    className: "project--commerce",
    image: ecommerceImage,
  },
  {
    number: "04",
    icon: FiMapPin,
    title: "On-Demand Delivery Platform",
    text: "A digital platform designed to simplify ordering, tracking and delivery from business to customer.",
    tags: ["Orders", "Tracking", "Delivery", "Management"],
    className: "project--delivery",
    image: rideImage,
  },
  {
    number: "05",
    icon: FiHeart,
    title: "Healthcare Platform",
    text: "A patient-focused digital healthcare platform for consultations, care coordination and health services.",
    tags: ["Consultations", "Patients", "Care", "Health"],
    className: "project--health",
    image: healthImage,
  },
  {
    number: "06",
    icon: FiCompass,
    title: "Astrology Platform",
    text: "A personalized platform for users to explore astrology, receive guidance and connect with experts.",
    tags: ["Horoscope", "Guidance", "Experts", "Insights"],
    className: "project--astrology",
    image: astrologyImage,
  },
  {
    number: "07",
    icon: FiBookOpen,
    title: "E-Learning Platform",
    text: "An engaging online learning experience that helps students study, practice and grow at their own pace.",
    tags: ["Courses", "Learning", "Students", "Progress"],
    className: "project--learning",
    image: elearningImage,
  },
  {
    number: "08",
    icon: FiRadio,
    title: "News Platform",
    text: "A modern news platform that brings audiences timely stories, live updates and topics that matter.",
    tags: ["Live News", "Stories", "Topics", "Updates"],
    className: "project--news",
    image: newsImage,
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
                  {project.image ? (
                    <img className="project-image" src={project.image} alt={`${project.title} preview`} />
                  ) : (
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
                  )}
                </div>

                <a
                  href="https://wa.me/919044312362"
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
