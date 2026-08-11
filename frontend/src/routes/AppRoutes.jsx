import { Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/Mainlayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
// import About from "../pages/Home/components/AboutPreview";
// import Services from "../pages/Home/components/ServicesSection";
// import WhyChooseUs from "../pages/Home/components/WhyChooseUs";
// import Contact from "../pages/Contact/Contact";
// import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
                <Route path="/contact" element={<Contact />} />
            </Route> */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />

            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;
