import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router}  from 'react-router-dom'
import AppRoutes from './AppRoutes'
import React from 'react'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>,
)
