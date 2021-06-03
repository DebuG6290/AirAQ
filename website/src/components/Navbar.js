import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {ParamContext} from'../App'
import {Button} from '../components/Button.js'

function Navbar() {
    const param=useContext(ParamContext)
    console.log(param.ParamState)

    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);
    const [search,setSearch]=useState('');


    const handleClick=()=>setClick(!click);
    const handleSearch=(e)=>{setSearch(e.target.value)};
    const closeMobileMenu=(e)=>{
        param.ParamDispatch(e.target.name)
        setClick(false);}
    const query= ()=>console.log({search});
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
    return (
        <>
        <nav className='navbar'>
        
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    AirAQ <i className='fas fa-wind'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click?'fas fa-times':'fa fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/pm10' className='nav-links' name='pm10' onClick={closeMobileMenu}>
                        PM 10
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/pm25' className='nav-links' name='pm25' onClick={closeMobileMenu}>
                        PM 2.5
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/no2' className='nav-links' name='no2' onClick={closeMobileMenu}>
                        NO2
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/so2' className='nav-links' name='so2' onClick={closeMobileMenu}>
                        SO2
                    </Link>
                </li>
                
                </ul>
                <input className='input-feild' type='text' onChange={handleSearch} placeholder='Please Select a Location'></input>
                {button && <Button buttonStyle='btn' onClick={query}>Search</Button>}

            </div>
        </nav>
            
        </>
    )
}

export default Navbar
