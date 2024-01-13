// import { useEffect } from 'react'
import { IconsSearch } from './Icons'
import './sectionWeatherToday.css'

export default function SectionWeatherToday () {
  // const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
  // useEffect(() => {
  //   fetch(URL + KEY)
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <article className='weatherToday'>
      <IconsSearch />
    </article>
  )
}
