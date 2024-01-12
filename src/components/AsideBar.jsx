import { IconsLogo, Home, IconsMap, IconsPinMap, IconsWorld, IconsCalendar, IconsBells, IconsProfile, IconsSetting } from './Icons'
import './asideBar.css'
export default function AsideBar () {
  return (
    <aside>
      <div className="asideTopSection">
        <div className="logoAside">
          <IconsLogo />
          <p>Weather</p>
        </div>
        <hr />
        <div className="menuAside">
          <Home />
          <IconsMap />
          <IconsPinMap />
          <IconsWorld />
          <IconsCalendar />
          <IconsSetting />
        </div>
      </div>
      <div className="asideProfile">
        <IconsBells />
        <IconsProfile />
      </div>
    </aside>
  )
}
