"use client"
import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SigninButtonComponent = () => {
  return (
    <SignInButton mode='modal'><button className='bg-darkRed text-sm font-semibold hover:text-darkColor text-white rounded-md py-2 px-4 hover:bg-darkRed/80 cursor-pointer'>login</button></SignInButton>
  )
}

export default SigninButtonComponent
