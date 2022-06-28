import React, { useState } from 'react';
import image from '../images/manageIT2.png';
import image2 from '../images/github_finder.png';
import image3 from '../images/mazaa.png';
import image4 from '../images/pwakanda.png';
import image5 from '../images/it-logger.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    

    const portfolios = [
        {
            'id': '1',
            'imageURL': image,
            'link': 'https://glacial-scrubland-92782.herokuapp.com/',
            'html': 'MANAGE-IT'
        },
        {
            'id': '2',
            'imageURL': image2,
            'link': 'https://github-finder-nine-eta.vercel.app/',
            'html': 'GITHUB FINDER'
        },
        {
            'id': '3',
            'imageURL': image3,
            'link': 'https://mazaa.vercel.app/',
            'html': 'MAZAA RECIPES'
        },
        {
            'id': '4',
            'imageURL': image4,
            'link': 'https://pwakanda.herokuapp.com/',
            'html': 'MOVIES APP'
        },
        {
            'id': '5',
            'imageURL': image5,
            'link': 'https://it-logger-kappa.vercel.app/',
            'html': 'IT - LOGGER'
        }
    ]

    const [isHovering, setIsHovering] = useState(-1);

    return (
        <div className="container">
            <div className='port all-center py-3'>
                <h1>my <span>project</span></h1>
                <div className='grid-3'>
                    {portfolios.map((item) => {
                        return (
                            <div className="" key={item.id}>    
                                <a href={item.link} target='_blank' without='true' rel="noreferrer" onMouseEnter={() => setIsHovering(item.id)} onMouseLeave={() => setIsHovering(-1)}>
                                    <h3 className={isHovering === item.id ? 'port_html' : 'hidden'}>{item.html}</h3>
                                    <img 
                                        src={item.imageURL} 
                                        alt= ''
                                        style={{ height: '200px', borderRadius: '5px' }}
                                        className={isHovering === item.id ? 'hidden' : ''}
                                    />
                                </a>   
                            </div>
                        )
                    })}                 
                </div>
                <Link to='/' className='btn btn-dark my-3'>
                    Back to Profile
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
