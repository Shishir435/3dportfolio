import React from 'react'
import { SectionWrapper } from '../hoc'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='sticky w-full text-white flex gap-auto'>
      <div className='m-auto'>
        <div className='flex mb-3 gap-4 justify-center align-baseline'>
          <a href="https://www.linkedin.com/in/shishir-chaurasiya/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
          <a href="https://www.instagram.com/_shishir435/" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
          <a href="https://github.com/Shishir435" target='_blank' rel="noopener noreferrer"><BsGithub /></a>
        </div>
        <p >
          Copyright &copy; Shishir
        </p>
      </div>

    </div>
  )
}

export default SectionWrapper(Footer, '');