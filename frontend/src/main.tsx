import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router}  from 'react-router-dom'
import AppRoutes from './AppRoutes'
import React from 'react'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
