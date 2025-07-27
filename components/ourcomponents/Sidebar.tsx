import React from 'react'

interface SidebarProps {
  isOpen: boolean;  // Prop to control the visibility of the sidebar
  onClose: () => void;  // Prop to handle closing the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute top-0 right-0 w-64 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={onClose} className="p-4">Close</button>
                {/* Sidebar content goes here */}
            </div>
        </div>
    )
}

export default Sidebar
