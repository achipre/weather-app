import { useState } from 'react'
import './App.css'
import { AsideBar } from './components/AsideBar'
import SectionStatictsToday from './components/SectionStatictsToday'
import SectionWeatherMap from './components/SectionWeatherMap'
import SectionWeatherToday from './components/SectionWeatherToday'
import SectionWeatherWeek from './components/SectionWeatherWeek'

function App () {
  const [isSection, setIsSection] = useState('Home')
  const handleSection = (info) => {
    setIsSection(info)
  }
  return (
    <main>
      <AsideBar isSection={isSection} handleSection={handleSection}/>
      <SectionWeatherToday />
      <SectionStatictsToday />
      <SectionWeatherWeek />
      <SectionWeatherMap />
    </main>
  )
}

export default App
