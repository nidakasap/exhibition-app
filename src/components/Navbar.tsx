import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import cx from 'classnames'; 
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: 'Events' },
    { id: 2, text: 'Career' },
    { id: 3, text: 'Contact' },
  ];

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    {/* Logo */}
   
    <h1 className='w-full text-3xl font-bold'>MUSEUM FUTURIA</h1>

    {/* Big Screen Navigation */}
    <ul className='hidden md:flex'>
      {navItems.map(item => (
        <NavLink
          key={item.id}
          to={`/${item.text}`}
          className={({isActive}) => 
            cx('p-4 text-xl hover:border-b-2 hover:border-white-500 m-2 cursor-pointer duration-300',{
            'border-b-2 border-white-500' : isActive})}
        >
          {item.text}
        </NavLink>
      ))}
    </ul>

    {/* Mobile Navigation Icon */}
    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

    {/* Mobile Navigation Menu */}
    <ul
      className={
        nav
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#2686EC] text-white ease-in-out duration-500 '
          : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
      }
    >
      {/* Mobile Logo */}
      <h1 className='w-full text-3xl font-bold text-white m-4'>MUSEUM FUTURIA</h1>

      {/* Mobile Navigation Items */}
      {navItems.map(item => (
        <li
          key={item.id}
          className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-[#2686EC] cursor-pointer border-white-600'
        >
          {item.text}
        </li>
      ))}
    </ul>
  
  </div>
  );
};

export default Navbar;