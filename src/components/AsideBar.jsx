import { IconsLogo, IconsAllWindows, IconsMap, IconsPinMap, IconsWorld, IconsCalendar, IconsBells, IconsProfile } from './Icons'
import './asideBar.css'
export default function AsideBar () {
  return (
    <aside>
      <IconsLogo />
      <IconsAllWindows />
      <IconsMap />
      <IconsPinMap />
      <IconsWorld />
      <IconsCalendar />
      {/* <IconsSetting /> */}
      <IconsBells />
      <IconsProfile />
    </aside>
  )
}
