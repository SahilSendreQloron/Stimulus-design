import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-96 bg-white text-slate-400 flex flex-col justify-center items-center'>
        <div className='w-[100%] px-10'>
            <p className='text-slate-400 text-xs  sm:text-base text-center'>Copyright @ 2016 Your Company | Design <span className='text-red-400 '>:templatemo</span></p>
        </div>
        <div className='flex flex-row w-[60%] sm:w-[40%] md:w-[20%] justify-between items-center mt-10'>
            <box-icon className='p-10' color='#B5B1B1' type='logo' name='facebook'></box-icon>
            <box-icon className='p-10' color='#B5B1B1' name='twitter' type='logo' ></box-icon>
            <box-icon className='p-10' color='#B5B1B1' name='google-plus' type='logo' ></box-icon>
            <box-icon className='p-10' color='#B5B1B1' name='basketball' ></box-icon>
            <box-icon className='p-10' color='#B5B1B1' name='linkedin' type='logo' ></box-icon>
        </div>
    </div>  
  )
}

export default Footer