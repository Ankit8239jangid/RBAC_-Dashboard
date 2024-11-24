import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContactsProvider } from './components/context/Context'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Table_UI from './components/User_Info_contener.jsx'
import Dasbord from './components/Dasbord.jsx'
import Settings from './components/settings.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Users" element={<Table_UI />} />
      <Route path="/" element={<Dasbord />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </RouterProvider>
  </StrictMode>,
)
