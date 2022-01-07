import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const portfolios = [
        {
            'id': '1',
            'imageURL': 'https://spliteq.co.za/wp-content/uploads/2020/07/contact-2.jpg',
            'link': 'https://lit-island-75764.herokuapp.com/',
            'html': 'MANAGE-IT'
        },
        {
            'id': '2',
            'imageURL': 'https://images.ctfassets.net/lzny33ho1g45/how-to-push-to-github-p-img/2cdf1242bb3c892e4c8814dd123ca321/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760',
            'link': 'https://github-finder-nine-eta.vercel.app/',
            'html': 'GITHUB FINDER'
        },
        {
            'id': '3',
            'imageURL': 'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg',
            'link': 'https://mazaa.vercel.app/',
            'html': 'MAZAA RECIPES'
        },
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
                                <a href={item.link} target='_blank' without rel="noreferrer" onMouseEnter={() => setIsHovering(item.id)} onMouseLeave={() => setIsHovering(-1)}>
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
