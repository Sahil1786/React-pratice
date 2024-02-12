

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';

// outlate={outlate uase as base avobe and blow iww same and midddle will chanege}

const Layout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
