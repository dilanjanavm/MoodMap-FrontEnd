import './App.css'
import NavBar from './components/pageComponents/NavBar'
import FeaturesPage from './components/pages/FeaturesPage'
import HomePage from './components/pages/HomePage'
import MentalHealthPage from './components/pages/MentalHealthPage'

function App() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <FeaturesPage />
      <MentalHealthPage />
    </main>
  )
}

export default App
