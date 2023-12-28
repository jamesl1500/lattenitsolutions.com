/**
 * Home Page Componant
 */

import React from 'react';

import Layout from '../Layout';

const Home = () => {

    return (
        <Layout>
            <div className='page-home'>
                <div className='home-top'>
                    <div className='home-top-inner container'>
                        <div className='home-top-content'>
                            <p>Latten IT Solutions is a full-service technology company that specializes in taking care of all your IT & technology needs within your home, office or business!</p>
                            <a href='tel:4402134860' className='btn btn-primary'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className='home-banner'>

                </div>
                <div className='home-services'>
                    <div className='home-services-inner container'>
                        <div className='home-services-content'>
                            <h2>Services</h2>
                            <p>We offer a wide range of services to help you with all your technology needs. We offer services for both residential and commercial clients.</p>
                            <div className='home-services-list'>
                                <div className='home-services-list-item'>
                                    <div className='home-services-list-item-content'>
                                        <h3>IT Support</h3>
                                        <p>Our IT Support services are available for both residential and commercial clients. We offer a wide range of services to help you with all your technology needs.</p>
                                    </div>
                                </div>
                                <div className='home-services-list-item'>
                                    <div className='home-services-list-item-content'>
                                        <h3>PC Repair</h3>
                                        <p>Our PC Repair services are available for both residential and commercial clients. We offer a wide range of services to help you with all your computer needs.</p>
                                    </div>
                                </div>
                                <div className='home-services-list-item'>
                                    <div className='home-services-list-item-content'>
                                        <h3>Website Debug</h3>
                                        <p>Our Website Debug services are available for both residential and commercial clients. We offer a wide range of services to help you with all your website needs.</p>
                                    </div>
                                </div>
                            </div>
                            <a href='/services' className='btn btn-primary'>View Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;