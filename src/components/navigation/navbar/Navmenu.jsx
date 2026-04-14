import React from 'react';
import { NavLink } from 'react-router';

const Navmenu = ({ icon, to, children }) => {
    return (
        <li >

            <NavLink to={to} className='flex justify-center items-center gap-1 text-[16px] text-[#64748B] font-medium'> {icon} {children}</NavLink>
        </li>
    );
};

export default Navmenu;