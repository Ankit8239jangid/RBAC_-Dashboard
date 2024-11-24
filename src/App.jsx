import React from 'react'
import Sidebar from './components/Sidbar'
import { ContactsProvider } from './components/context/Context'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <ContactsProvider>
        <div className=" h-screen w-full  flex md:flex-row flex-col  ">

          <Sidebar />
          <Outlet />



          {/* <Dasbord/>   */}
        </div>
      </ContactsProvider>
    </>
  )
}

export default App