import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import { Menu as MenuIcon } from '@mui/material'
import Emails from '../components/Emails'
import SideBar from '../components/Sidebar'
const Main = () => {
    const [openSidebar, setSidebar] = useState(true)
    const toggleSidebar = () => {
        setSidebar(!openSidebar)
    }
    return (
        <>
            <div style={{ position: 'top' }}>
                <MenuIcon color="action" onClick={toggleSidebar} />
            </div>
            <Header />
            <SideBar openSidebar={openSidebar} />
            <Emails openSidebar={openSidebar} />
        </>
    )
}

export default Main