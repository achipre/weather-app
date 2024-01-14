import { Route as rootAside } from './components/AsideBar'
import { Route as ProfileImport } from './components/Profile'
import { Route as SettingsImport } from './components/Settings'

const RouteProfile = ProfileImport.update({
  path: '/profile',
  getParentsRoute: () => rootAside
})
const RouteSettings = SettingsImport.update({
  path: '/settings',
  getParentsRoute: () => rootAside
})

export const routeTree = rootAside.addChildren([RouteProfile, RouteSettings])
