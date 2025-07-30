import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteIcon from './FavouriteIcon'
import MobileMenu from './MobileMenu'
import { auth, currentUser } from '@clerk/nextjs/server'
import { UserIcon } from 'lucide-react'
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

const Header = async() => {

  const user = await currentUser();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-5 ">
        <Container className='flex items-center justify-between gap-7 text-lightText'>
            {/* Logo / Brand Name */}
            <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5">
              <MobileMenu /> 
              <Logo/>       
            </div>
            {/* Header menu  */}
            <HeaderMenu/>   
            {/* user icon  */}
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-4">
                <SearchBar/>
                <FavouriteIcon/>
                <CartIcon/>


                {/* Signin and signOut With Clerk */}
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton/>  
                  </SignedIn>
                  { 
                    !user && <SignInButton mode='modal'><button className='bg-darkRed text-sm font-semibold hover:text-darkColor text-white rounded-md py-2 px-4 hover:bg-darkRed/80 cursor-pointer'>login</button></SignInButton>
                  }
                </ClerkLoaded>
            </div>
        </Container>
    </header>
  )
}

export default Header
