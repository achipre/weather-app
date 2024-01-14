import { FileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = new FileRoute('/settings').createRoute({
  component: Settings
})
function Settings () {
  return (
    <div>configuracion</div>
  )
}
