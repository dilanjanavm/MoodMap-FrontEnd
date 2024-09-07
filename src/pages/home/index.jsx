import HomePage from "../../components/pages/HomePage.jsx";
import FeaturesPage from "../../components/pages/FeaturesPage.jsx";
import MentalHealthPage from "../../components/pages/MentalHealthPage.jsx";
import MoodMapPage from "../../components/pages/MoodMapPage.jsx";
import StartJourney from "../../components/pages/StartJourney.jsx";
import NavBar from "../../components/pageComponents/NavBar.jsx";

const Home = () => {
  return <div>
      <HomePage />
      <FeaturesPage />
      <MentalHealthPage />
      <MoodMapPage />
      <StartJourney />
  </div>
}

export default Home