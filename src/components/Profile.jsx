import { FileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = new FileRoute('/profile').createRoute({
  component: Profile
})

function Profile () {
  return (
    <div>Perfil</div>
  )
}
