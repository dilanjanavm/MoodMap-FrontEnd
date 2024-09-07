import './App.css'
import NavBar from './components/pageComponents/NavBar'
import Calender from './pages/diary-page/Calender.jsx'
import FeaturesPage from './components/pages/FeaturesPage'
import HomePage from './pages/home/index.jsx'
import MentalHealthPage from './components/pages/MentalHealthPage'
import Monitoring from './components/pages/Monitoring'
import MoodMapPage from './components/pages/MoodMapPage'
import StartJourney from './components/pages/StartJourney'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/diary" element={<Calender/>}/>
                    <Route path="/monitoring" element={<Monitoring/>}/>
                    {/*<Route path="/login" element={<Login />} /> */}
                    {/*<Route path="/register" element={<Register />*/}
                </Routes>
                {/*<Calender/>*/}
                {/*<Monitoring/>*/}
            </main>
        </Router>

    )
}

export default App
