import React from 'react'

const Navbar2 = () => {
  return (
    <nav className='py-4 text-red-500 text-3xl font-semibold bg-amber-300 mt-16'>
      <div className='container'>
          <div className="menu_row flex justify-between items-center">
            <div className="menu_logo w-16">
              <img src="images/logo.avif" alt="logo" />
            </div>
            <div className="flex gap-4">
              <input className='w-64 bg-orange-500 outline-none text-white pl-2 text-lg	 ' type="text" />
              <button className='bg-orange-950 text-white w-28 text-xl p-1 h-10'>search</button>
            </div>
            <ul className='flex gap-6'>
              <li><a className='hover:text-white hover:bg-orange-600 transition duration-500' href="">Home</a></li>
              <li><a className='hover:text-white hover:bg-orange-600 transition duration-500' href="">Services</a></li>
              <li><a className='hover:text-white hover:bg-orange-600 transition duration-500' href="">blog</a></li>
              <li><a className='hover:text-white hover:bg-orange-600 transition duration-500' href="">About</a></li>
            </ul>
            
          </div>
      </div>
    </nav>
  )
}

export default Navbar2