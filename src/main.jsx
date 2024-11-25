import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContactsProvider } from './components/context/Context'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import User_Info_contener from './components/User_Info_contener.jsx'
import Dasbord from './components/Dasbord.jsx'
import Settings from './components/settings.jsx'
import WelcomePage from './components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<WelcomePage />} />
      <Route path="/dashboard" element={<App />}>
        <Route index element={<Dasbord />} />  
        <Route path="users" element={<User_Info_contener />} />
        <Route path="settings" element={<Settings />} /> 
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ContactsProvider>
        <WelcomePage />
      </ContactsProvider>
    </RouterProvider>
  </StrictMode>,
)
