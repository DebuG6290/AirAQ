import React from 'react'
import './SideInfo.css'
function SideInfo() {
    return (
        <div className='weather-container'>
            <h3 className='icon'><i class="fas fa-cloud-sun"></i></h3>
            <h2 className='heading'>Weather Today</h2>
            <h3 className='icon'><i class="fas fa-temperature-low"></i></h3>
            <h3 className='heading-small'>Temperature</h3>
            <h3 className='data'>Data</h3>
            <h3 className='icon'><i class="fas fa-tint"></i></h3>
            <h3 className='heading-small'>Humidity</h3>
            <h3 className='data'>Data</h3>
            <h3 className='icon'><i class="fas fa-compass"></i></h3>
            <h3 className='heading-small'>Wind Direction</h3>
            <h3 className='data'>Data</h3>
            <h3 className='icon'><i class="fas fa-cloud-meatball"></i></h3>
            <h3 className='heading-small'>AQI</h3>
            <h3 className='data'>Data</h3>
        </div>
    )
}

export default SideInfo
