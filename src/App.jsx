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
  console.log(isSection)
  return (
    <main className={isSection !== 'Home' && 'mainflex'}>
      <AsideBar isSection={isSection} handleSection={handleSection}/>
      {isSection === 'Home' && <>
        <SectionWeatherToday />
        <SectionStatictsToday />
        <SectionWeatherWeek />
        <SectionWeatherMap />
      </>}
      {isSection === 'Map' && <SectionWeatherToday isSection={isSection}/>}
      {isSection === 'PinMap' && <SectionStatictsToday isSection={isSection} />}
      {isSection === 'World' && <SectionWeatherWeek isSection={isSection} />}
      {isSection === 'Calendar' && <SectionWeatherMap isSection={isSection} />}
    </main>
  )
}

export default App
