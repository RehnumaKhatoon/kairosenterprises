import { Container } from "react-bootstrap";
import Reveal from "./Reveal";

const steps = [["01","Discover","We listen, research and define the opportunity."],["02","Plan","We shape a focused roadmap, scope and success measures."],["03","Build","We design, develop and validate in transparent sprints."],["04","Scale","We launch, learn and continuously improve performance."]];

const ProcessSection = () => {
    return (
        <section className="section process"><Container><Reveal className="section-heading section-heading--center"><div className="eyebrow">How we work</div><h2>From ambitious idea to<br /><em>measurable impact.</em></h2></Reveal><div className="process-line">{steps.map(([number,title,text], index)=><Reveal className="process-step" delay={index*.1} key={title}><span className="process-step__number">{number}</span><div className="process-step__dot"/><h3>{title}</h3><p>{text}</p></Reveal>)}</div></Container></section>
    )
}

export default ProcessSection;
