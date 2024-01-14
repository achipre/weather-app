import { useState } from 'react'
import { IconsLogo, Home, IconsMap, IconsPinMap, IconsWorld, IconsCalendar, IconsBells, IconsProfile, IconsSetting } from './Icons'
import './asideBar.css'
import { RootRoute } from '@tanstack/react-router'

export const Route = new RootRoute({
  component: AsideBar
})

function AsideBar () {
  const [isBell, setIsBell] = useState(false)
  const handleBell = () => {
    setIsBell(!isBell)
  }

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
        <IconsBells isBell={isBell} handleBell={handleBell}/>
          <IconsProfile />
      </div>
    </aside>
  )
}
