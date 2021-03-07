import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navigation = () => (
    <div className="Header">
            
            <div className="Menu">
                <ul class="UpperMenuHeaderNavigator">
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.LOGIN}>Zaloguj</Link></li>
                    <li  class="MenuHeaderListUp"><Link class="MenuHeaderListUpLink" to={ROUTES.REGISTER}>Załóż konto</Link></li>
                </ul>
                <ul className="MenuHeaderNavigatior">
                    <li  class="MenuHeaderList"><Link class="MenuHeaderListLink" to={ROUTES.HOME}>Start</Link></li>    
                    <li  class="MenuHeaderList"><Link class="MenuHeaderListLink" to={ROUTES.ABOUTUS}>O nas</Link></li> 
                    <li  class="MenuHeaderList"><Link class="MenuHeaderListLink" to={ROUTES.WHODOWEHELP}>Fundacja i organizacje</Link></li> 
                    <li  class="MenuHeaderList"><Link class="MenuHeaderListLink" to={ROUTES.CONTACT}>Kontakt</Link></li> 
                </ul>
            </div>
            <div className='HeroImage'/>
            <div className='HeaderHero'>
                <p>Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w dobre ręce!
                </p>
            </div>
    </div>
)

export default Navigation;