import { useRef, useState } from 'react'
import { IconsClose, IconsCloud, IconsPinMap, IconsSearch } from './Icons'
import './sectionWeatherToday.css'

export default function SectionWeatherToday ({ isSection }) {
  const [isSearch, setIsSearch] = useState(false)
  const handleSearch = () => {
    setIsSearch(!isSearch)
    if (isSearch === false) {
      refInput.current.focus()
    }
  }

  const [isDashboard] = useState(true)
  const refInput = useRef(null)
  // console.log(import.meta.env.VITE_KEY_VALUE_WEATHER)
  // console.log(import.meta.env.VITE_BASE_URL)

  return (
    <article className={isSection === 'Map' ? 'articleFull' : 'weatherOne'}>
      <div className="weather">
        <h2>TODAY</h2>
        <IconsCloud />
        <p>28 <sup><sup>o</sup>C</sup></p>
        <div className={`sectionSearch ${isSearch ? 'searchFull' : undefined}`}>
          <input ref={refInput} className={`inputSearch ${isSearch ? 'inputFull' : undefined}`} type="text" placeholder='City' />
          {isSearch ? <IconsClose handleSearch={handleSearch} /> : <IconsSearch handleSearch={handleSearch} /> }
        </div>
        <div className="location">
          <IconsPinMap isDashboard={isDashboard} />
          <p className='city-name'>London</p>
        </div>
      </div>
    </article>
  )
}
