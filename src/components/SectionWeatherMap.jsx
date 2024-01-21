import './sectionWeatherMap.css'
export default function SectionWeatherMap ({ isSection }) {
  return (
    <article className={isSection === 'Calendar' ? 'articleFull' : 'weatherFour'}>
      <h2>WEATHER&apos;S IN THE MAP</h2>
    </article>
  )
}
