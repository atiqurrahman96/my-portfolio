import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const menuItems = <>


        <NavLink className='mx-3' to='/home'>Home</NavLink>
        <NavLink className='mx-3' to='/about'>About ME</NavLink>
        <Link className='mx-3' to='/blog'>Blog</Link>


    </>
    return (
        <div>
            <div class="navbar bg-gray-900">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-white btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div class="navbar-end hidden lg:block text-white">
                    {menuItems}
                </div>


            </div>
        </div >
    );
};

export default Header;