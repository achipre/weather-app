import { IconsCloud } from './Icons'
import './sectionWeatherWeek.css'
export default function SectionWeatherWeek ({ isSection }) {
  return (
    <article className={isSection === 'World' ? 'articleFull' : 'weatherThree'}>
      <h2>7 DAYS FORECAST</h2>
      <div className="card__day">
        <div className="card__day-temp">
          <IconsCloud />
          <p>+29˚/18˚</p>
        </div>
        <p className="card__day-date">
          25-jul
        </p>
        <p className="card__day-name">
          Monday
        </p>
      </div>
      <div className="card__day">
        <div className="card__day-temp">
          <IconsCloud />
          <p>+29˚/18˚</p>
        </div>
        <p className="card__day-date">
          25-jul
        </p>
        <p className="card__day-name">
          Monday
        </p>
      </div>

    </article>
  )
}
