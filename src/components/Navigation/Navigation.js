import React, { useState } from 'react'
import Drawer from './Drawer'
import Navbar from './Navbar'

export default function Navigation({children}) {
    const [isOpen,setIsOpen] = useState(false)
    const toggleDrawer = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    
   <>
    <Drawer toggleDrawer={toggleDrawer} isOpen={isOpen}/>
     <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen}/>
    <div className="my-5">
    {children}
    </div>
   </>
  )
}
