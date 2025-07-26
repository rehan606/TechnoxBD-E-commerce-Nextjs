import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className}:{className?:string}) => {
  return (
    <Link href="/" className="text-2xl font-bold">
      <p className={cn("text-2xl text-darkColor font-black tracking-wider hover:text-darkRed font-sans uppercase group hoverEffect ", className)}>Technox<span className="text-darkRed group-hover:text-darkColor hoverEffect ">BD</span></p>
    </Link>
  )
}

export default Logo;
