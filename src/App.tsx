import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

function App() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Outlet/>
        </div>
    );
}

export default App;
