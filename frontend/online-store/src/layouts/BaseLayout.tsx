import { Outlet } from "react-router-dom";
import Hearder from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout = () => {
    return (
        <>
            <Hearder />
            // sidebar?
            <Outlet />
            <Footer />
        </>
    )
}

export default BaseLayout;