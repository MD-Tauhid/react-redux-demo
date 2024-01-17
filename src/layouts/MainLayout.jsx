import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/reusable/Loader';

const MainLayout = () => {
    const { isLoading } = useSelector(state => state)
    return (
        <div>
            {isLoading && <Loader/>}
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;