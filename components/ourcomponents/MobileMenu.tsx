"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar';

const MobileMenu = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <>
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className='hover:text-darkRed hoverEffect cursor-pointer md:hidden'>
                <AlignLeft />
            </button>
            {/* sidebar  */}
            <div className='md:hidden'>
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>


        </>
    )
}
 
export default MobileMenu
