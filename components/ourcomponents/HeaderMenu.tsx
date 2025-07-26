"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname();
    return (
        <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm font-semibold capitalize text-lightText'>
            {
                headerData?.map((item) =>(
                    <Link 
                        key={item?.title} 
                        href={item.href} 
                        className={` hover:text-darkRed hoverEffect relative group ${pathname === item?.href && "text-darkRed"}`}
                    >
                        {item.title}
                        <span className={`absolute  -bottom-0.5 w-0 h-0.5 left-1/2 bg-darkRed group-hover:w-1/2 group-hover:left-0 hoverEffect ${pathname === item?.href && "w-1/2"}`} />
                        <span className={`absolute  -bottom-0.5 w-0 h-0.5 right-1/2 bg-darkRed group-hover:w-1/2 group-hover:right-0 hoverEffect ${pathname === item?.href && "w-1/2"}`} />
                    </Link>
                ))
            }
        </div>
    )
}

export default HeaderMenu
