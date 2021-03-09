import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './_HeaderButtons.scss';

const Buttons = () => {
    return(
    <>
    <button className='HeaderButton1'><Link to={ROUTES.LOGIN}>oddaj <br/>rzeczy</Link></button>
    <button className='HeaderButton2'><Link to={ROUTES.LOGIN}>zorganizuj<br/>zbiórke</Link></button>
    </>
    )
}

export default Buttons;