import React from 'react';
import './_WhoDoWeHelp.scss';
import WhoDoWeHelpButtons from './Buttons/WhoDoWeHelpButtons';
const WhoDoWeHelp = () => (
    <div className='WhoDoWeHelp' id='WhoDoWeHelp'>
        <div className='WhoDoWeHelpTitle'>
            <h1>Komu pomagamy?</h1>
            <div className='WhoDoWeHelpDecoration'/>
        </div>
        <div className='WhoDoWeHelpHero'> 
        <WhoDoWeHelpButtons/>   
        </div>
    </div>
)

export default WhoDoWeHelp;