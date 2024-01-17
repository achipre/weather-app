import './sectionWeatherMap.css'
export default function SectionWeatherMap ({ isSection }) {
  return (
    <article className={isSection === 'Calendar' ? 'articleFull' : 'weatherFour'}>
      <h2>4Weather&apos;s in the Map</h2>
    </article>
  )
}
