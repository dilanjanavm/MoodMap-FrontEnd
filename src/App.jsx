import './App.css'
import NavBar from './components/pageComponents/NavBar'
import FeaturesPage from './components/pages/FeaturesPage'
import HomePage from './components/pages/HomePage'
import MentalHealthPage from './components/pages/MentalHealthPage'
import MoodMapPage from './components/pages/MoodMapPage'
import StartJourney from './components/pages/StartJourney'

function App() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <FeaturesPage />
      <MentalHealthPage />
      <MoodMapPage />
      <StartJourney />
    </main>
  )
}

export default App
