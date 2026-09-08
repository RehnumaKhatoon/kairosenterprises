import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/FAQ";
import FAQSection from "./components/CTASection";

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Kairos Enterprises | Digital Solutions &amp; Technology Services</title>
                <meta name="description" content="Kairos Enterprises designs and builds high-performance websites, software, mobile apps, cloud systems and digital products for ambitious businesses." />
                <meta name="keywords" content="web development, software development, mobile apps, cloud, DevOps, UI UX design, digital transformation" />
                <meta property="og:title" content="Kairos Enterprises | Digital Solutions & Technology Services" />
                <meta property="og:description" content="Purpose-built digital products that turn ambitious ideas into measurable business growth." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kairosenterprises.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://kairosenterprises.com/" />
            </Helmet>
            <Hero />
            <AboutPreview />
            <ServicesSection />
            <WhyChooseUs />
            <ProcessSection />
            <IndustriesSection />
            <ProjectsSection />
            <Testimonials />
            <FAQSection />
        </div>
    )
}

export default Home
