import React from 'react'
import form from '../image/form.jpg';
import 'boxicons'

function Form() {
  return (
    <div className='h-[80rem] sm:h-[55rem] lg:h-[35rem] lg:w-[100%] bg-orange-600 flex flex-col lg:flex-row'>   
            <div className='h-[50%] w-[100%] lg:h-[100%] lg:w-[50%] bg-orange-600 flex flex-col p-8'>
                <p className='text-2xl sm:text-2xl md:text-3xl text-white'>Say Hello...</p>
                <br />
                <p className='text-sm sm:text-md text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <br />
                <input className='h-10 w-[95%] sm:w-[70%] focus:outline-none bg-transparent border-b-2 border-yellow-400 placeholder:text-white placeholder:text-sm sm:placeholder:text-md' type="text" placeholder='Your Name'/>
                <br />
                <input className='h-10 w-[95%] sm:w-[70%] border-b-2 border-yellow-400 focus:outline-none bg-transparent placeholder:text-white placeholder:text-sm sm:placeholder:text-md' type="text" placeholder='Your Email'/>
                
                <input className=' h-40 w-[95%] sm:w-[70%] border-b-2 border-yellow-400 focus:outline-none bg-transparent placeholder:text-white placeholder:text-sm sm:placeholder:text-md ' type="text" placeholder='Write your message...'/>
                <br />
                <br />
                <button className=' w-36 h-10 sm:w-44 sm:h-12 lg:w-52 lg:h-12 lg:text-sm xl:w-60 xl:h-14 bg-white text-black xl:text-sm rounded-full hover:bg-slate-300 font-medium'>Send</button>
            </div>  

            <div className='h-[50%] w-[100%] lg:h-[100%] lg:w-[50%] bg-slate-400 flex flex-col sm:flex-row'>

                <div className='w-[100%] h-[50%] sm:w-[50%] sm:h-[100%]'>
                        <img src={form} alt="form" style={{objectFit:'cover',height:'100%',width:'100%'}}/>

                </div>


                <div  className='w-[100%] h-[50%] sm:w-[50%] sm:h-[100%] bg-black p-6 sm:p-10 md:p-10 lg:p-5 xl:p-16'>
                    <p className='md:text-xl text-white sm:text-lg'>Visit my Office</p>
                     <p className='md:text-sm text-neutral-500 sm:text-xs'>456 New Street 22000,New York City, USA</p>    
                    <br />
                     <p className=' md:text-xl text-white sm:text-lg'>Contact</p>
                     <br />
                     <div className='flex flex-row items-center '>
                        <box-icon className='sm:w-8 md:w-10' name='phone' type='solid' color='#ffffff' ></box-icon>
                        <p className='text-xs sm:text-xs md:text-sm text-white ml-3'>01-0110-0220</p>
                     </div>
                     <br />
                     <div className='flex flex-row items-center '>
                        <box-icon className='sm:w-8 md:w-10' name='envelope' color='#ffffff' ></box-icon>
                        <p className='text-xs sm:text-xs md:text-sm text-yellow-500 ml-3'>helo@company.co</p>
                     </div>
                     <br /> 
                     <div className='flex flex-row items-center '>
                        <box-icon className='sm:w-8 md:w-10' name='world' color='#ffffff' ></box-icon>
                        <p className='text-xs sm:text-xs  text-yellow-500 ml-3'>company.co</p>
                     </div>
                </div>

            </div>  

    </div>
  )
}

export default Form