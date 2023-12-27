/**
 * Layout component
 */
import React from 'react';

// Includes
import Header from './includes/Header';
import Footer from './includes/Footer';

const Layout = ({ children }) => {

    return (
        <div className='website'>
            <div className='website-header'>
                <Header />
            </div>
            <div className='website-content'>
                { children }
            </div>

            <div className='website-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;