import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Nav.css'

const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <div className='Headerr' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height:'55px',backgroundColor:"#C0BDBD",padding:"10px",borderRadius:"10px" }}>
      <span className='logo'><span className='name'>R</span>EDUX <span className='name'>S</span>TORE 👉</span>
      <div>
        <Link className='navLink' to='/'>click on ☞<span><strong>Home</strong></span></Link>
        <Link className='navLink' to='/cart'><strong>Cart</strong></Link>
        <span className='cartCount'>
          Cart Items: {items.length}
        </span>
      </div>
    </div>
  )
}

export default Navbar