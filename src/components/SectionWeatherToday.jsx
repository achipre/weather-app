import { useState } from 'react'
import { IconsClose, IconsSearch } from './Icons'
import './sectionWeatherToday.css'

export default function SectionWeatherToday ({ isSection }) {
  const [isSearch, setIsSearch] = useState(false)
  const handleSearch = () => {
    setIsSearch(!isSearch)
  }
  // console.log(import.meta.env.VITE_KEY_VALUE_WEATHER)
  // console.log(import.meta.env.VITE_BASE_URL)

  return (
    <article className={isSection === 'Map' ? 'articleFull' : 'weatherOne'}>
      <h2>1Weather&apos;s Today</h2>
      <div className={`sectionSearch ${isSearch ? 'searchFull' : undefined}`}>
        <input className={`inputSearch ${isSearch ? 'inputFull' : undefined}`} type="text" placeholder='City' />
        {isSearch ? <IconsClose handleSearch={handleSearch} /> : <IconsSearch handleSearch={handleSearch} /> }
      </div>
    </article>
  )
}
