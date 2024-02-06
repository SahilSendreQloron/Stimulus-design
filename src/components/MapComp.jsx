import React from 'react'

function MapComp() {
  return (
    <div className='w-[100%] h-96 bg-orange-600 flex justify-center items-center'>
            <div className='w-[80%] h-[80%] sm:w-[80%] sm:h-[80%]  md:w-[65%] md:h-[80%]'>
            <iframe className='w-[100%] h-[100%] shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.88855381254!2d79.03133168926611!3d21.1380244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c117f47563bb%3A0x81f18f2d73351e90!2sSTARBUCKS!5e0!3m2!1sen!2sin!4v1707202812635!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  )
}

export default MapComp