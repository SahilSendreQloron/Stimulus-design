import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%] h-20 bg-red-100'>
        <ul className='flex flex-row justify-center items-center h-[100%] w-[100%] sm:text-xs md:text-sm lg:text-md '>
            <li className='p-1 text-[0.60rem] lg:text-md md:text-sm sm:text-xs xl:text-[1rem] sm:p-1 md:p-2 lg:p-3 hover:text-orange-400'>HOME</li>
            <li className='p-1 text-[0.60rem] lg:text-md md:text-sm sm:text-xs xl:text-[1rem] sm:p-1 md:p-2 lg:p-3 hover:text-orange-400'>ABOUT US</li>
            <li className='p-1 text-[0.60rem] lg:text-md md:text-sm sm:text-xs xl:text-[1rem] sm:p-1 md:p-2 lg:p-3 hover:text-orange-400'>EXPERIENCES</li>
            <li className='p-1 text-[0.60rem] lg:text-md md:text-sm sm:text-xs xl:text-[1rem] sm:p-1 md:p-2 lg:p-3 hover:text-orange-400'>TESTIMONAL</li>
            <li className='p-1 text-[0.60rem] lg:text-md md:text-sm sm:text-xs xl:text-[1rem] sm:p-1 md:p-2 lg:p-3 hover:text-orange-400'>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar