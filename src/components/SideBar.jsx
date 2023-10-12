import React from 'react'
import { categories } from '../utils/Constants'
import { useContext } from 'react'
import { YoutubeContext } from '../context/YoutubeContext'

const SideBar = () => {
    const {selectedCategory, setSelectedCategory} = useContext(YoutubeContext)


  return (
    <nav className='flex flex-col p-1 md:p-4'>
    {categories.map((item,i)=>(
        <div key={i}>
        <div onClick={()=>setSelectedCategory(item)} className={ `${item.name === selectedCategory.name && 'bg-[#201e1e]'}
        flex items-center gap-2 py-2 px-3 md:px-3 text-md md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}>
            {item.icon}
        <span>{item.name}</span>
        </div>
        {item.divider && <hr/>}
        
        </div>
    ))}
     
      
    </nav>
  )
}

export default SideBar
