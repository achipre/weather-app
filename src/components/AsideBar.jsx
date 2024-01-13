import { useState } from 'react'
import { IconsLogo, Home, IconsMap, IconsPinMap, IconsWorld, IconsCalendar, IconsBells, IconsProfile, IconsSetting } from './Icons'
import './asideBar.css'
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const rootRoute = RootRoute({
  component: AsideBar
})

export default function AsideBar () {
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
        <Link to='/profile'>
          <IconsProfile />
        </Link>
      </div>
    </aside>
  )
}
