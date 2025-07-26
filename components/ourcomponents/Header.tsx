import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-5 ">
        <Container className='flex items-center justify-between gap-7 text-lightText'>
            {/* Logo / Brand Name */}
            <Logo/>     
            {/* Header menu  */}
            <HeaderMenu/>   
            {/* user icon  */}
            <div>Icon</div>
        </Container>
    </header>
  )
}

export default Header
