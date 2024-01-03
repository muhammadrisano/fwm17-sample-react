import React from 'react'
import Navbar from '../../components/module/Navbar/Navbar'
import {Outlet} from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer style={{ backgroundColor: 'lightblue'}}>
        <p style={{textAlign:"center"}}>Copyright C 2023</p>
      </footer>
    </div>
  )
}

export default Main