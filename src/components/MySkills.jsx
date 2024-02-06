import React from 'react'

function MySkills() {
  return (
    <div className='myskills-parent w-[100%] h-[56rem] sm:h-[35rem] md:h-[40rem] lg:h-[25rem] xl:h-[23rem]  grid lg:grid-cols-2 grid-cols-1'>
        <div className='lg:w-[100%] h-[30%] lg:h-[100%] p-7 order-2'>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Donec auctor</p><br />
                <p className='text-red-500 text-xs sm:text-sm md:text-md lg:text-lg' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <br />
                <p className='text-xs sm:text-sm md:text-md lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti optio veniam doloribus assumenda porro velit architecto error, nesciunt voluptatem suscipit?</p>
                <br />
                <p className='text-xs sm:text-sm md:text-md lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, deserunt nesciunt. Consequatur reiciendis vero ea alias ducimus unde, corporis quaerat?</p>
        </div>
        <div className='mb-0 h-[70%] md:h-[100%] lg:h-[100%] w-[100%] grid grid-col-1 sm:grid-cols-2 order-1'>
            <div className='mySkills-css-10f2 lg:w-[100%] md:h-[100%] lg:h-[100%] bg-slate-800 h-72'>
                    
            </div>
            <div className='h-[100%] sm:h-[100%] lg:w-[100%] md:h-[100%] lg:h-[100%] bg-yellowdst p-9'>
                <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'>My Skills</p>
                <p className='text-white'>Photoshop, HTML, CSS, JS, Web Design</p>
                <br />
                <p className='text-xs sm:text-lg font-medium'>FrontEnd Design - 90%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                     <div class="bg-black h-2.5 rounded-full" style={{width: '90%'}}></div>
                </div>
                <br />
                <p className='text-xs sm:text-lg font-medium'>Backend Processing - 70%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                    <div class="bg-black h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
                <br />
                <p className='text-xs sm:text-lg font-medium'>HTML & CSS - 80%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                 <div class="bg-black h-2.5 rounded-full" style={{width: '80%'}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkills