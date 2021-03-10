import React from 'react';
import './_WhoDoWeHelp.scss';


const WhoDoWeHelp = () => (
    <div className='WhoDoWeHelp' id='WhoDoWeHelp'>
        <div className='WhoDoWeHelpTitle'>
            <h1>Komu pomagamy?</h1>
            <div className='WhoDoWeHelpDecoration'/>
        </div>
        <div className='WhoDoWeHelpHeader'>
            <button className='WhoDoWeHelpBox'>
                <h2>Fundacjom</h2>    
            </button>
            <button className='WhoDoWeHelpBox'>
                <h2>Organizacjom pozarządowym</h2>
            </button>
            <button className='WhoDoWeHelpBox'>
                <h2>Lokalnym zbiórkom</h2>
            </button>
        </div> 
        <div className='WhoDoWeHelpHero'>   
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
    </div>
)

export default WhoDoWeHelp;