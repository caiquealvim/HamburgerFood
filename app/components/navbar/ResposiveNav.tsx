'use client'

import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNav from './MobileNav'

const ResposiveNav = () => {
  const[Show,setShow] = useState(false)

  const OpenNavHandle = () => setShow(true)
  const CloseNavHandle = () => setShow(false)

  return (
    <div>
    <NavBar openNav={OpenNavHandle}/>
    <MobileNav Show={Show} closeNav = {CloseNavHandle}/>
    </div>
  )
}

export default ResposiveNav