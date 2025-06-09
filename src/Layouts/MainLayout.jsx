import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            This main layout!
            <Outlet/>
        </div>
    );
};

export default MainLayout;