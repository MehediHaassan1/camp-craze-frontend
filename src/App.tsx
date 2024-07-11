import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/ui/Footer";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
