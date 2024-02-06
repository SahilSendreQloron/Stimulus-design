import React from 'react'
import computer from '../image/computer-xxl.png'
function Education() {
  return (
    <div className='lg:w-[100%] h-[55rem] sm:h-80 bg-slate-500 flex flex-col sm:flex-row'>
    
    <div className='w-[100%] h-[50%] sm:w-[50%] sm:h-[100%]  bg-yellowcst order-2 sm:order-1'>    
    <div className='h-[40%] w-[100%] p-8'>
        <p className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white'>My Education</p>
        <br />
        <p className='text-white text-xs sm:text-sm md:text-sm lg:text-lg'>Lorem ipsum dolor sit amet.</p>

    </div >
    <div className='h-[60%] w-[100%] p-8  '>

     <div className='h-[50%] w-[100%] flex flex-row'>
        <div className='w-[10%] flex justify-center items-center h-[50%]'>
            <img className='w-10' src={computer} alt="computer" />
        </div>    
        <div className='w-[90%] h-[50%] flex justify-center  flex-col ml-3'>
            <p className='text-white md:text-xl lg:text-2xl '>Master in Design <span className=' text-green-900 text-[0.75rem] sm:text-sm font-medium'>2014 July-2015 Sep</span></p>    
            <p className='text-white sm:text-xs md:text-sm text-[0.75rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>    

    </div>   
    <div className='h-[50%] w-[100%] flex flex-row'>
        <div className='w-[10%] flex justify-center items-center'>
            <img className='w-10' src={computer} alt="computer" />
        </div>    
        <div className='w-[90%] flex justify-center flex-col ml-3'>
            <p className='text-white md:text-xl lg:text-2xl'>Bachelor of Arts <span className='text-green-900 text-[0.75rem] sm:text-sm font-medium'>2015 Oct-2017 Jan</span></p>    
            <p className='text-[0.75rem] text-white sm:text-xs md:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>    

    </div>    
</div>
    </div>
    <div className='edu-img sm:w-[50%] sm:h-[100%] w-[100%] h-[50%] order-1 sm:order-2'>

    </div>
</div>
  )
}

export default Education