import { Heart,   } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteIcon = () => {
    return (
        <Link href="/favourites" className="relative group">
              <Heart size={20} className='group-hover:text-darkRed hoverEffect' />
              <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex in-checked:justify-center">0</span>
            </Link>
    )
}

export default FavouriteIcon
