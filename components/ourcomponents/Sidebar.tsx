import React from 'react'
import Logo from './Logo'

interface SidebarProps {
  isOpen: boolean;  // Prop to control the visibility of the sidebar
  onClose: () => void;  // Prop to handle closing the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 w-full shadow-xl transform  ${isOpen ? 'translate-x-0' : '-translate-x-full '} hoverEffect`}>


            <div className="min-w-72 max-w-96 bg-black h-full text-white p-10 border-r border-r-darkRed flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Logo className="text-white" subClass="group-hover:text-white"/>
                    <button onClick={onClose} className="hover:text-darkRed hoverEffect border border-gray-100 py-1 px-3 ">X</button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
