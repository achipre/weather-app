import { useState } from 'react'
import { Tooltip } from 'antd'
import { IconsLogo, Home, IconsMap, IconsPinMap, IconsWorld, IconsCalendar, IconsBells, IconsProfile, IconsSetting } from './Icons'
import './asideBar.css'

export function AsideBar ({ handleSection, isSection }) {
  const [isBell, setIsBell] = useState(false)
  const handleBell = () => {
    setIsBell(!isBell)
  }

  // Open Modal Sign In
  const [modalProfile, setModalProfile] = useState(false)
  const handleModalProfile = () => {
    setModalProfile(true)
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
          <Home isSection={isSection} handleSection={handleSection}/>
          <IconsMap isSection={isSection} handleSection={handleSection}/>
          <Tooltip title="Weather Map" placement='right'>
            <IconsPinMap isSection={isSection} handleSection={handleSection}/>
          </Tooltip>
          <IconsWorld isSection={isSection} handleSection={handleSection}/>
          <IconsCalendar isSection={isSection} handleSection={handleSection}/>
          <IconsSetting />
        </div>
      </div>
      <div className="asideProfile">
        <IconsBells isBell={isBell} handleBell={handleBell}/>
        <IconsProfile handleModalProfile={handleModalProfile} modalProfile={modalProfile} setModalProfile={setModalProfile}/>
      </div>
    </aside>
  )
}
