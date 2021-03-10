import React from 'react';
import './_EasyStepsButton.scss';
import './_EasySteps.scss';
import Button from './EasyStepsButton.js'

const EasySteps = () => (
    <>
    <h1>Wystarczą 4 proste kroki</h1>
    <div className='EasyStepsDecoration'/>
    <div className='EasyStepsContainer'>
        <div className='EasyStepsBox1'>
            <p></p>
            <h2>Wybierz rzeczy</h2>
            <div className='EasyStepsLine'/>
            <span>ubrania, zabawki, sprzęt i inne</span>
        </div>
        <div className='EasyStepsBox2'>
            <p></p>
            <h2>Spakuj je</h2>
            <div className='EasyStepsLine'/>
            <span>skorzystaj z worków na śmieci</span>
        </div>
        <div className='EasyStepsBox3'>
            <p></p>
            <h2>Zdecyduj komu chcesz pomóc</h2>
            <div className='EasyStepsLine'/>
            <span>wybierz zaufane miejsce</span>
        </div>
        <div className='EasyStepsBox4'>
            <p></p>
            <h2>Zamów kuriera</h2>
            <div className='EasyStepsLine'/>
            <span>kurier przyjedzie w dogodnym terminie</span>
        </div>

    </div>
    
    <Button/>
    </>
)

export default EasySteps;