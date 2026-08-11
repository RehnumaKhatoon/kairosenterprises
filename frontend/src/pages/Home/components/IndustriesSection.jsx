import { Container } from "react-bootstrap";
import { FiActivity, FiBookOpen, FiBriefcase, FiCpu, FiDollarSign, FiHome, FiShoppingBag, FiTruck } from "react-icons/fi";
import Reveal from "./Reveal";

const industries = [[FiActivity,"Healthcare"],[FiBookOpen,"Education"],[FiDollarSign,"Finance"],[FiShoppingBag,"Retail"],[FiHome,"Real Estate"],[FiTruck,"Logistics"],[FiBriefcase,"Manufacturing"],[FiCpu,"Technology"]];

const IndustriesSection = () => <section className="section industries" id="industries"><Container><Reveal className="section-heading section-heading--split"><div><div className="eyebrow">Industries</div><h2>Deep context.<br /><em>Fresh perspective.</em></h2></div><p>We bring cross-industry experience and a curious mindset to every challenge, translating complexity into elegant digital systems.</p></Reveal><div className="industry-grid">{industries.map(([Icon,title],i)=><Reveal className="industry-card" delay={(i%4)*.05} key={title}><Icon/><span>{title}</span><small>0{i+1}</small></Reveal>)}</div></Container></section>;

export default IndustriesSection;
