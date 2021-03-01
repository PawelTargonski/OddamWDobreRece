import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navigation = () => (
    <div className="Header">
        <div className="Container">
            <nav class="Menu">
                <ul class="UpperMenuHeaderNavigator">
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.REGISTER}>Załóż konto</Link></li>
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.LOGIN}>Zaloguj</Link></li>
                </ul>
                <ul class="MenuHeaderNavigatior">
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.HOME}>Start</Link></li>    
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.ABOUTUS}>O nas</Link></li>    
                </ul>
            </nav>
        </div> 
    </div>
)

export default Navigation;