import './App.css';
import NavBar from './components/pageComponents/NavBar';
import Calender from './pages/diary-page/Calender.jsx';
import HomePage from './pages/home/index.jsx';
import Monitoring from './pages/Monitor/Monitoring.jsx';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Login from "./pages/auth/Login/index.jsx";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/_fullcalendar.scss'
import "remixicon/fonts/remixicon.css";

function AppRoutes() {
    const location = useLocation(); // This gets the current route

    return (
        <>
            <ToastContainer newestOnTop/>
            {location.pathname !== "/login" && <NavBar/>}
            <>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/diary" element={<Calender/>}/>
                    <Route path="/monitoring" element={<Monitoring/>}/>
                    <Route path="/login" element={<Login/>}/>
                    {/*<Route path="/register" element={<Register />} */}
                </Routes>
            </>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppRoutes/>
        </Router>
    );
}

export default App;
