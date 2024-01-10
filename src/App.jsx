import './App.css'
import AsideBar from './components/AsideBar'
import SectionStatictsToday from './components/SectionStatictsToday'
import SectionWeatherMap from './components/SectionWeatherMap'
import SectionWeatherToday from './components/SectionWeatherToday'
import SectionWeatherWeek from './components/SectionWeatherWeek'

function App () {
  return (
    <main>
      <AsideBar />
      <SectionWeatherToday />
      <SectionStatictsToday />
      <SectionWeatherWeek />
      <SectionWeatherMap />
    </main>
  )
}

export default App
