import { IconsTermometer, IconsVisibility } from './Icons'
import './sectionStaticsToday.css'
export default function SectionStatictsToday ({ isSection }) {
  return (
    <article className={`cardTodayHighlight ${isSection === 'PinMap' ? 'articleFull' : 'weatherTwo'}`}>
      <h2>TODAY&apos;S HIGHLIGHT</h2>
      <div className="weatherTodayHighlight">
        <article className='cardToday cardWind'>
          <p>Wind Status</p>
          <p>7.5</p><span>km/h</span>
        </article>
        <article className='cardToday cardUV'>
          <p>UV Index</p>
          <p>5.50</p><span>uv</span>
        </article>
        <article className='cardToday cardPressure'>
          <p>Pressure</p>
          <p>1020</p><span>hPa</span>
        </article>
        <article className='cardToday cardHumanity'>
          <p>Humidity</p>
          <p>80</p><span>%</span>
        </article>
        <article className='cardToday cardVisivility'>
          <p>Visibility</p>
          <div className="statics">
            <div className="visibility">
              <p>1000<span>m</span></p>
            </div>
            <p className='descriptions'>
              <IconsVisibility />
              Visibility in meter</p>
          </div>
        </article>
        <article className='cardToday cardFeelsLike'>
          <p>Feels Like</p>
          <div className="statics">
            <div className="temp">
              <IconsTermometer />
              <p>10<sup>o</sup></p>
            </div>
            <p className='descriptions'>Temperature human perception</p>

          </div>
        </article>
      </div>
    </article>
  )
}
