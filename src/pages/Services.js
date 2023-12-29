/**
 * Home Page Componant
 */

import React from 'react';

import Layout from '../Layout';

const Services = () => {

    return (
        <Layout>
            <div className='page-services'>
                <div className='services-top'>
                    <div className='services-top-inner container'>
                        <div className='services-top-content'>
                            <h2>Services</h2>
                            <p>Learn more about our services</p>
                        </div>
                    </div>
                </div>
                <div className='services-banner'>

                </div>
                <div className='services-content'>
                    <div className='services-content-inner container'>
                        <div className='services-content-content'>
                            <p>We offer a wide range of services to help you with all your technology needs. We offer services for both residential and commercial clients.</p>
                            <div className='services-list'>
                                <div className='services-list-item'>
                                    <div className='services-list-item-content'>
                                        <h3>IT Support</h3>
                                        <p>Our IT Support services are available for both residential and commercial clients. We offer a wide range of services to help you with all your technology needs.</p>

                                        <h4>Services</h4>
                                        <ul>
                                            <li>Data recovery</li>
                                            <li>Computer repair</li>
                                            <li>Email setup</li>
                                            <li>Printer setup</li>
                                            <li>Network setup</li>
                                            <li>Software installation</li>
                                            <li>Software training</li>
                                            <li>Computer training</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='services-list-item'>
                                    <div className='services-list-item-content'>
                                        <h3>PC Repair</h3>
                                        <p>Our PC Repair services are available for both residential and commercial clients. We offer a wide range of services to help you with all your computer needs.</p>

                                        <h4>Services</h4>
                                        <ul>
                                            <li>PC hardware repair</li>
                                            <li>PC software repair</li>
                                            <li>PC hardware installation</li>
                                            <li>PC software installation</li>
                                            <li>PC hardware training</li>
                                            <li>PC software training</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='services-list-item'>
                                    <div className='services-list-item-content'>
                                        <h3>Website Debug</h3>
                                        <p>Our Website Debug services are available for both residential and commercial clients. We offer a wide range of services to help you with all your website needs.</p>

                                        <h4>Services</h4>
                                        <ul>
                                            <li>Website design</li>
                                            <li>Website development</li>
                                            <li>Website maintenance</li>
                                            <li>Website hosting</li>
                                            <li>Website training</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Services;