import React from 'react'
import { SectionWrapper } from '../hoc'
const Footer = () => {
  return (
    <div  className='stickey p-8 mb-8 bottom-0 left-0 h-[30px] text-white flex justify-center items-center'>Copyright &copy; Shishir<span className='sm:block hidden'>| All rights are reserved</span></div>
  )
}

export default SectionWrapper(Footer, '');