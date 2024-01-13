// import { useEffect } from 'react'
import { IconsSearch } from './Icons'
import './sectionWeatherToday.css'

export default function SectionWeatherToday () {
  console.log(import.meta.env.VITE_KEY_VALUE_WEATHER)
  console.log(import.meta.env.VITE_BASE_URL)

  return (
    <article className='weatherToday'>
      <h2>Weather&apos;s in the Map</h2>
      <IconsSearch />
    </article>
  )
}
