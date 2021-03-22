import React from 'react';
import './_Contact.scss';
import Formular from './Formular/Formular.js';

const Contact = () => (
    <div className='Contact' id='Contact'>
        <div className='ContactImage'/>
        <div className='ContactHero'>
            <h1>Skontaktuj się z nami</h1>
            <div className='ContactHeroDecoration'/>
            <Formular/>
            <div className="Footer">
                <div className='FooterLabel'>Copyright by Coders Lab</div>
                <div className='ImageFb' alt=''/>
                <div className='ImageInst' alt=''/>
                </div>
        </div>
    </div>
)

export default Contact;