import React from 'react'
import computer from '../image/computer-xxl.png'
import send from '../image/send.png'
import cells from '../image/cells.png'
import html from '../image/html.png'
function Tech() {
  return (
    <div className='h-[35rem] lg:w-[100%] md:h-96 lg:h-64 bg-slate-500 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>
        <div className='lg:h-[100%] flex items-center justify-center flex-col text-center lg:p-8 bg-yellowcst text-white'>
            <img className='w-10 mb-3'src={computer} alt="computer" />
            <p className='text-lg sm:text-xl mb-3 font-medium'>Interface Design</p>   
            <p className='text-xs sm:text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non libero cupiditate?</p>
        </div>
        <div className='lg:h-[100%] flex items-center justify-center flex-col text-center lg:p-8 bg-orange-600 text-white'>
            <img className='w-10 mb-3'src={send} alt="send" />
            <p className='text-lg sm:text-xl mb-3 font-medium'>Media Stratergy</p>   
            <p className='text-xs sm:text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non libero cupiditate?</p>
        </div>
        <div className='lg:h-[100%] flex items-center justify-center flex-col text-center lg:p-8 bg-black text-white'>
            <img className='w-10 mb-3'src={cells} alt="cells" />
            <p className=' text-lg sm:text-xl mb-3 font-medium'>Mobile App</p>   
            <p className='text-xs sm:text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non libero cupiditate?</p>
        </div>
        <div className='lg:h-[100%] flex items-center justify-center flex-col text-center lg:p-8 text-black bg-white'>
            <img className='w-10 mb-3'src={html} alt="html" />
            <p className='text-lg sm:text-xl mb-3 font-medium'>Coding</p>   
            <p className='text-xs sm:text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non libero cupiditate?</p>
        </div>
    </div>
  )
}

export default Tech