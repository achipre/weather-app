import { IconsSearch } from './Icons'
import './sectionWeatherToday.css'

export default function SectionWeatherToday ({ isSection }) {
  // console.log(import.meta.env.VITE_KEY_VALUE_WEATHER)
  // console.log(import.meta.env.VITE_BASE_URL)

  return (
    <article className={isSection === 'Map' ? 'articleFull' : 'weatherOne'}>
      <h2>1Weather&apos;s Today</h2>
      <IconsSearch />
    </article>
  )
}
