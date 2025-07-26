import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center'>
        <SearchIcon size={20} className='hover:text-darkRed hoverEffect'/>
    </div>
  )
}

export default SearchBar
