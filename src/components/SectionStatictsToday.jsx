import { IconsHumanity, IconsPressure, IconsTermometer, IconsUVIndex, IconsVisibility, IconsWinds } from './Icons'
import './sectionStaticsToday.css'
export default function SectionStatictsToday ({ isSection }) {
  return (
    <article className={`cardTodayHighlight ${isSection === 'PinMap' ? 'articleFull' : 'weatherTwo'}`}>
      <h2>TODAY&apos;S HIGHLIGHT</h2>
      <div className="weatherTodayHighlight">
        <article className='cardToday cardWind'>
          <div className="titleCard">
            <IconsWinds />
            <p>Wind Status</p>
          </div>
          <div className="statics">
            <div className="wind">
              <div className="windAnimation">
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
                <div className="windLine2"></div>
                <div className="windLine"></div>
              </div>
              <p>7.5<span>km/h</span></p>
            </div>
          </div>
        </article>
        <article className='cardToday cardUV'>
          <div className="titleCard">
            <IconsUVIndex />
            <p>UV Index</p>
          </div>
          <div className="statics">
            <div className="uvIndex">
              <p>5.50<span>uv</span></p>
            </div>
          </div>
        </article>
        <article className='cardToday cardPressure'>
          <div className="titleCard">
            <IconsPressure />
            <p>Pressure</p>
          </div>
          <div className="statics">
            <div className="uvIndex">
              <p>1020<span>hPa</span></p>
            </div>
          </div>
        </article>
        <article className='cardToday cardHumanity'>
          <div className="titleCard">
            <IconsHumanity />
            <p>Humidity</p>
          </div>
          <div className="statics">
            <div className="humidity">
              <p>80<span>%</span></p>
            </div>
            <p className='descriptions'>
              Visibility in meter</p>
          </div>
        </article>
        <article className='cardToday cardVisibility'>
          <div className="titleCard">
            <IconsVisibility />
            <p>Visibility</p>
          </div>
          <div className="statics">
            <div className="visibility">
              <p>1000<span>m</span></p>
            </div>
            <p className='descriptions'>
              Visibility in meter</p>
          </div>
        </article>
        <article className='cardToday cardFeelsLike'>
        <div className="titleCard">
            <IconsTermometer />
            <p>Feels Like</p>
          </div>
          <div className="statics">
            <div className="temp">
              <p>10<sup>o</sup></p>
            </div>
            <p className='descriptions'>Temperature human perception</p>

          </div>
        </article>
      </div>
    </article>
  )
}
