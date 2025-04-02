import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className='bg-blue-600 text-white '>
        <div className='container mx-auto flex justify-between items-center py-3'>
            <div className='hidden md:flex items-center space-x-4'>
                <Link to={"/"} className='hover:text-gray-400'><FaInstagram/></Link>
                <Link to={"/"} className='hover:text-gray-400'><FaFacebook /></Link>
                <Link to={"/"} className='hover:text-gray-400'><FaXTwitter /></Link>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span> we ship worldwide - fast and reliable shipping</span>
            </div>
            <div>
                <Link to={"/phone"} className='hidden md:block hover:text-gray-300' >+91 9999090909</Link>
            </div>

        </div>
    </div>
  )
}

export default Topbar