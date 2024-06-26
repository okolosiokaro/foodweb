import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
nav ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={handleNav} className='cursor-pointer'>
          <AiOutlineMenu  size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Buy <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'> 
          <p className='bg-black rounded-full text-white p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods'/>
      </div>
      {/* cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/> Cart
      </button>
      {/* mobile menu */}
      {/* overlay */}
      {nav ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
      {/* side drawer menu */}
      <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 ease-in-out duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 ease-in-out duration-300'}>
        <AiOutlineClose size={30} onClick={handleNav} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Buy <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex items-center cursor-pointer'><TbTruckDelivery size={25} className='mr-2'/>Orders</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><MdFavorite size={25} className='mr-2'/>Favourites</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><FaWallet size={25} className='mr-2'/>Wallet</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><MdHelp size={25} className='mr-2'/>Help</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><AiFillTag size={25} className='mr-2'/>Promotions</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><BsFillSaveFill size={25} className='mr-2'/>Best Ones</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><FaUserFriends size={25} className='mr-2'/>Invite Friends</li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default NavBar
