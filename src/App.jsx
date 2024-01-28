import { useState } from 'react'
import './App.css'
import { AsideBar } from './components/AsideBar'
import SectionStatictsToday from './components/SectionStatictsToday'
import SectionWeatherMap from './components/SectionWeatherMap'
import SectionWeatherToday from './components/SectionWeatherToday'
import SectionWeatherWeek from './components/SectionWeatherWeek'
// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient('https://urjajmkokoivpydzwxiv.supabase.co', process.env.VITE_SUPABASE_KEY)

function App () {
  const [isSection, setIsSection] = useState('Home')
  // Estado de Sesion
  // const [session, setSession] = useState(null)

  const handleSection = (info) => {
    setIsSection(info)
  }
  return (
    <main className={isSection !== 'Home' ? 'mainflex' : ''}>
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
