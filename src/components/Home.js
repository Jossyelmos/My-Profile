import React from 'react';
import image from '../images/amos-2.jpg';

const Home = () => {
    return (
        <div className='container'>
            <div className="all-center py-3">
                <img 
                    src={image} 
                    alt="img" 
                    className='round-img'
                    style={{ width: '200px', height: '200px' }} 
                />
                <div className='homeInfo text-center'>
                    <div className='infoCls my-3'>
                        <h1>i'm amos oluniyi. <span>web developer</span></h1>
                        <p>I'm a South African based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <p>Building simple and beautiful things for complex interfaces is what I enjoy most about my work. I am also interested in crafting beautiful minimal products and exploring new worlds.</p>
                        <p>Contact: <strong>jossyelmos@yahoo.com</strong></p>
                        <p className="social-img">
                            <a href='#!'><i className="fab fa-react fa-3x"></i> </a>
                            <a href='#!'><i className="fab fa-html5 fa-3x"></i> </a>
                            <a href='#!'><i className="fab fa-css3-alt fa-3x"></i> </a>
                            <a href='#!'><i className="fab fa-node fa-3x"></i> </a>
                            <a href='#!'><i className="fab fa-js-square fa-3x"></i> </a>
                            <a href='#!'><img src="https://img.Icons8.com/color/48/000000/firebase.png" alt='' /></a>
                        </p>
                        <a href='/portfolio' className='botton pink'>
                                MORE ABOUT ME
                            <i className='fa fa-arrow-right homeIcon active text-light' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
