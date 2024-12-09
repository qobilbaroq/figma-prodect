import React from 'react'
import pp from '../assets/product.jpg'

const MenuContent = () => {
  return (
    <div className='flex justify-between items-center h-screen mx-32 p-10 bg-slate-200'>
      <img
      src={pp} width={550}/>
        <div className='flex flex-col gap-10 '>
          <h1 className='text-4xl font-bold'>COLLECTION</h1>
          <button className='border-2 border-black rounded-2xl p-1'>belanja</button>
        </div>
    </div>
  )
}

export default MenuContent