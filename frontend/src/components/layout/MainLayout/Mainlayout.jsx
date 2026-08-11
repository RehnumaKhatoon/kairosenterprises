import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../ScrollToTop";

const MainLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
};

export default MainLayout;
