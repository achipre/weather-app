import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from '@tanstack/react-router'
import routeTree from './route.js'

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  component: App

})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App router={router}/>
  </React.StrictMode>
)
