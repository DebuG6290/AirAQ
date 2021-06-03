import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Charts from '../Charts'
import SideInfo from '../SideInfo'


function Home() {
    return (
        <>
            
            <SideInfo className='main sideinfo'/>
            <Charts className='main charts'/>
            
        </>
    )
}

export default Home
