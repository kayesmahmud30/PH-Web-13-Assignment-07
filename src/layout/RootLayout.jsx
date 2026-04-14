import React from 'react';
import { Outlet } from 'react-router';
import  Navbar  from '../components/navigation/navbar/Navbar';
import Footer from '../components/navigation/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default RootLayout;