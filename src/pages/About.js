/**
 * Home Page Componant
 */

import React from 'react';

import Layout from '../Layout';

const About = () => {

    return (
        <Layout>
            <div className='page-about'>
                <div className='about-top'>
                    <div className='about-top-inner container'>
                        <div className='about-top-content'>
                            <h2>About Us</h2>
                            <p>Learn more about us</p>
                        </div>
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-content-inner container'>
                        <div className='about-content-content'>
                            <p>Latten IT Solutions is a full-service technology company that specializes in taking care of all your IT & technology needs within your home, office or business!</p>
                            <p>We offer a wide range of services to help you with all your technology needs. We offer services for both residential and commercial clients.</p>
                        </div>

                    </div>
                </div>
                <div className='about-banner'>

                </div>
                <div class="about-team">
                    <div class="about-team-inner container">
                        <h2>Meet the team</h2>
                        <p>Our team is here to help you with all your technology needs.</p>

                        <div class="about-team-list">
                            <div className='about-team-list-item'>
                                <div className='about-team-list-item-content'>
                                    <img src='/resume_picture.jpg' alt='James Latten' />
                                    <h3>James Latten</h3>
                                    <p>Owner / Lead Technician</p>
                                    <ul>
                                        <li><a href="mailto:hello@jameslatten.com" target='_blank' rel='noopener noreferrer'>Email</a></li>
                                        <li><a href='https://jameslatten.com' target='_blank' rel='noopener noreferrer'>Portfolio</a></li>
                                        <li><a href='https://www.linkedin.com/in/jameslattenjr/' target='_blank' rel='noopener noreferrer'>Linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;