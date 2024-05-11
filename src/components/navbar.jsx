import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { assetImages } from '../constants/index'
import { IoMoon, IoSunnySharp, IoGrid   } from "react-icons/io5";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [changeMenu, setChange] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    const toggleChange = () => {
        setChange(!changeMenu)
    }

  return (
    <div>
      <div className="flex justify-between py-4 md:px-8 px-4 items-center dark:bg-slate-900 border-b-white">
      <img src={assetImages.NcyImage} alt="ncy-img" className="w-[70px] h-[70px]" />
      <div>
        <button className="py-3 px-3 bg-slate-900 mr-2 rounded-md text-white dark:bg-white dark:text-slate-900 hover:opacity-80" onClick={toggleChange}><IoGrid /></button>
        <button className="py-3 px-3 bg-slate-900 rounded-md text-white dark:bg-white dark:text-slate-950 hover:opacity-80" onClick={toggleTheme}>{darkMode ? <IoMoon /> : <IoSunnySharp />}</button>
      </div>
      </div>

    <div className={changeMenu ? 'block' : 'hidden'}>
    <div className="modal absolute  top-0 left-0 w-full h-screen bg-colorBlur flex items-center justify-center py-2 px-2">
        <div className="w-[350px] h-[280px] bg-white rounded-md py-1 relative overflow-hidden dark:bg-slate-900">
            <h3 className="text-center text-xl dark:text-white py-2 border-b-slate-500 border-2 dark:border-none">Change pr</h3>
            <ul className="text-center mt-5 px-2">
              <NavLink to='/' className='dark:text-slate-900 font-bold text-xl bg-slate-900 py-2 rounded-md text-white block mt-2 dark:bg-white hover:opacity-85'>PR 1</NavLink>
              <NavLink to='/' className='dark:text-slate-900 font-bold text-xl bg-slate-900 py-2 rounded-md text-white block mt-2 dark:bg-white hover:opacity-85'>PR 2</NavLink>
              <NavLink to='/' className='dark:text-slate-900 font-bold text-xl bg-slate-900 py-2 rounded-md text-white block mt-2 dark:bg-white hover:opacity-85'>PR 3</NavLink>
            </ul>
            <h3 className="remove bg-red-500 text-white text-center py-2 cursor-pointer hover:opacity-80" onClick={toggleChange}>Close</h3>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
