import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './_EasyStepsButton.scss';

const Button = () => {
    return(
    <>
    <button className='EasyStepButton'><NavLink to={ROUTES.LOGIN}>oddaj <br/>rzeczy</NavLink></button>
    </>
    )
}

export default Button;