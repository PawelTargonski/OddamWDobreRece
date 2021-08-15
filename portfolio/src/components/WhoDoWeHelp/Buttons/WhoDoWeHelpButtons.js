import React from 'react';
import './_WhoDoWeHelpButtons.scss';
import Fundations from './Fundations';
import Organizations from './Organizations';
import LocalCollections from './LocalCollections';
const Buttons =()=>(
    <div className='WhoDoWeHelpHeader'>
            <Fundations/>
            <Organizations/>
            <LocalCollections/>
    </div>         
)
export default Buttons;