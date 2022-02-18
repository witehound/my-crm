import React, { Children } from 'react'
import './AppLayout.css'
import LayoutFooter from '../LayoutFooter/LayoutFooter'
import LayoutHeader from '../LayoutHeader/LayoutHeader'


function AppLayout({children}) {
  return (
    <div className='app-layout'>
    <div className="app-layout-header">
      <LayoutHeader/>
    </div>
     <div className="app-layout-main">
       {children}
     </div>
     <footer className="app-layout-footer">
       <LayoutFooter />
     </footer>
    </div>
  )
}

export default AppLayout