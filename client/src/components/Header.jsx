import React from 'react'
import browselistings from '../assets/navbar/browselistings.svg'
import applicationhistory from '../assets/navbar/applicationhistory.svg'
import blog from '../assets/navbar/blog.svg'
import contactus from '../assets/navbar/contactus.svg'
import bell from '../assets/navbar/bell.svg'
import user from '../assets/navbar/user.png'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center py-2 px-12 shadow-md border-b bg-white'>
            <a className='text-2xl font-bold' href='/'>InternBrand</a>
            <ul className='flex gap-12'>
                <li className='flex items-center justify-center gap-1.5 font-semibold text-dark cursor-pointer'>
                    <img src={browselistings} alt="browselistings" />
                    <h2>Browse Listings</h2>
                </li>
                <li className='flex items-center justify-center gap-1.5 font-semibold text-inactive cursor-pointer hover:text-lightText duration-200'>
                    <img src={applicationhistory} alt="applicationhistory" />
                    <h2>Application History</h2>
                </li>
                <li className='flex items-center justify-center gap-1.5 font-semibold text-inactive cursor-pointer hover:text-lightText duration-200'>
                    <img src={blog} alt="blog" />
                    <h2>Blog</h2>
                </li>
                <li className='flex items-center justify-center gap-1.5 font-semibold text-inactive cursor-pointer hover:text-lightText duration-200'>
                    <img src={contactus} alt="contactus" />
                    <h2>Contact Us</h2>
                </li>
            </ul>
            <div className='flex items-center gap-2'>
                <img src={bell} alt="notifications" className='cursor-pointer' />
                <img src={user} alt="user" className='h-16 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Header