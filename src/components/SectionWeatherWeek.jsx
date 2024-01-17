import './sectionWeatherWeek.css'
export default function SectionWeatherWeek ({ isSection }) {
  return (
    <article className={isSection === 'World' ? 'articleFull' : 'weatherThree'}>
      <h2>37 days Forecast</h2>
    </article>
  )
}
