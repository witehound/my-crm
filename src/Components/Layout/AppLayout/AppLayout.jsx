import React from 'react'
import './AppLayout.css'
import LayoutFooter from '../LayoutFooter/LayoutFooter'
import LayoutHeader from '../LayoutHeader/LayoutHeader'
import { useState } from 'react'

function AppLayout() {

  return (
    <div className='app-layout'>
      <LayoutHeader/>
      AppLayout
      <LayoutFooter />
    </div>
  )
}

export default AppLayout