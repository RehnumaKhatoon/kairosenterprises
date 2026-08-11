import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  { className:"project--finance", category:"Fintech platform", title:"NexaFlow", text:"A real-time financial operations hub built for faster decisions." },
  { className:"project--health", category:"Health technology", title:"CareSync", text:"A calmer, connected patient journey across every touchpoint." },
  { className:"project--commerce", category:"Digital commerce", title:"Mono Market", text:"A high-conversion commerce engine ready for global growth." },
];

const ProjectsSection = () => <section className="section projects" id="projects"><Container><Reveal className="section-heading section-heading--split section-heading--light"><div><div className="eyebrow eyebrow--light">Featured work</div><h2>Digital products with<br /><em>real-world momentum.</em></h2></div><p>A selection of conceptual engagements showing how strategy, experience and engineering come together.</p></Reveal><Row className="g-4">{projects.map((project,index)=><Col lg={index===0?7: index===1?5:12} key={project.title}><Reveal className={`project-card ${project.className}`}><div className="project-card__art"><div className="project-card__window"><span/><span/><span/></div><div className="project-card__shape"/><div className="project-card__data"><i/><i/><i/><i/></div></div><div className="project-card__content"><span>{project.category}</span><h3>{project.title}</h3><p>{project.text}</p><a href="#contact" aria-label={`View ${project.title} project`}><FiArrowUpRight/></a></div></Reveal></Col>)}</Row></Container></section>;

export default ProjectsSection;
