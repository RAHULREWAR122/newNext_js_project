import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className='w-full bg-[#003569] p-10 font-[inter]'>
      <div className='h-full grid grid-cols-1 md:grid-cols-3 w-full gap-6 p-6'>
        
        <div className="w-full sm:w-[470px] p-3 h-[70px] bg-[#152d47] flex justify-center gap-10 items-center rounded-xl">
          <img src="/telephone.png" alt="Telephone Image" className='h-[60px] w-[60px]' />
          <div className='text-white'>
            <p className='font-semibold text-lg'>Phone Number</p>
            <p>+ 974 3118 1843</p>
          </div>
        </div>

        <div className="w-full sm:w-[470px] p-3 h-[70px] bg-[#152d47] flex justify-center gap-10 items-center rounded-xl">
          <img src="/email.png" alt="Email Image" className='h-[60px] w-[60px]' />
          <div className='text-white'>
            <p className='font-semibold text-lg'>Email Address</p>
            <p>Elbrithcqhr@gmail.com</p>
          </div>
        </div>

        <div className="w-full sm:w-[470px] p-3 h-[70px] bg-[#152d47] flex justify-center gap-10 items-center rounded-xl">
          <img src="/location.png" alt="Location Image" className='h-[60px] w-[60px]' />
          <div className='text-white'>
            <p className='font-semibold text-lg'>Office Location</p>
            <p>Ambassador Street, Zone 61,</p>
          </div>
        </div>

        <div className="h-[70px] w-full sm:w-[470px] p-3 bg-white flex justify-center items-center rounded-xl">
          <img src="/logo_for_footer.png" alt="Company Logo" className='h-auto' />
        </div>

        <div className="w-full sm:w-[470px] md:h-[80px]  p-3 text-white flex justify-start items-center rounded-xl bg-[#152d47]">
          <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
        </div>
      </div>

      <div className='flex items-center ml-6 gap-2'>
        <span className='text-white font-semibold'><IoLocationOutline /></span>
        <p className='text-white text-sm'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </footer>
  )
}

export default Footer
