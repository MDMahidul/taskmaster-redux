import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[80px]'>
                <Sidebar/>
            </div>
            <div className="w-full">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;