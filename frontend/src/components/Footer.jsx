import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            SmartCart is your one-stop shop for all lifestyle needs. We provide high-quality products with a seamless shopping experience.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/delivery'>Delivery</Link></li>
            <li><Link to='/privacy-policy'>Privacy policy</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="tel:+12124567890" className="hover:text-black transition-colors">+1-212-456-7890</a></li>
            <li><a href="mailto:contact@smartcart.com" className="hover:text-black transition-colors">contact@smartcart.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ smartcart.com - All Right Reserved.</p>
        <p className='py-1 text-xs text-center text-gray-400'>Built with love by <a href="https://www.linkedin.com/in/c-chaithanya-prasad/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">C Chaithanya Prasad</a> | <a href="https://github.com/Chaithanya009" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a></p>
      </div>

    </div>
  )
}

export default Footer
