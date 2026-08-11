import { Container, Row, Col } from "react-bootstrap";
import { FiStar } from "react-icons/fi";
import Reveal from "./Reveal";

const quotes = [
  ["Kairos brought clarity to a complex brief and delivered a product that feels as good as it performs.","Ananya Mehta","COO, Meridian Labs","AM"],
  ["They operate like an extension of our team—proactive, commercially aware and genuinely invested in the outcome.","Rohan Kapoor","Founder, Northstar","RK"],
  ["The new platform changed how quickly our teams can work. The quality and communication were exceptional.","Sara Joseph","Director, Alto Systems","SJ"],
];

const Testimonials = () => <section className="section testimonials"><Container><Reveal className="section-heading section-heading--center"><div className="eyebrow">Client stories</div><h2>Partnerships built on<br /><em>trust and results.</em></h2></Reveal><Row className="g-4">{quotes.map(([quote,name,role,initials],i)=><Col lg={4} key={name}><Reveal className="quote-card" delay={i*.08}><div className="quote-card__stars" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(n=><FiStar key={n}/>)}</div><blockquote>“{quote}”</blockquote><div className="quote-card__person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div></Reveal></Col>)}</Row></Container></section>;

export default Testimonials;
