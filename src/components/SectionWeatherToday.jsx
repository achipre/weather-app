import { useEffect } from 'react'

export default function SectionWeatherToday () {
  const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
  const KEY = 'a694f184579ce9404b9ff87dbc046b5d'
  useEffect(() => {
    fetch(URL + KEY)
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, [])

  return (
    <article>SectionWeaterToday</article>
  )
}
