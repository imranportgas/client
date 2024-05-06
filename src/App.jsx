import Menu from "./components/Menu/Menu.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
    return (
        <div className='app'>
            <div className='container'>
                <div className='app-container'>
                    <Menu />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    )
}