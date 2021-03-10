import React from 'react';
import { Link } from 'react-scroll'; 
import { NavLink } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes';
import Buttons from './HeaderButtons.js';
import './_Navigation.scss';
// import '../TreeColumns/TreeColumns.js';
const Navigation = () => (
    <div className="Header">
            <div className='HeroImage'/>
            <div className='HeaderContainer'>
                <div className="Menu">
                    <ul class="UpperMenuHeaderNavigator">
                        <li  class="MenuHeaderListUp"><NavLink class="MenuHeaderListUpLink" to={ROUTES.LOGIN}>Zaloguj</NavLink></li>
                        <li  class="MenuHeaderListUp"><NavLink class="MenuHeaderListUpLink" to={ROUTES.REGISTER}>Załóż konto</NavLink></li>
                    </ul>
                    <div className="MenuHeaderNavigatior">
                        <Link class="MenuHeaderListLink" 
                            activeClass="active"
                            to="TreeColumns"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}
                            >Start
                            
                        </Link>    
                        <Link class="MenuHeaderListLink" 
                            activeClass="active"
                            to="AboutUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>O nas
                        </Link>    
                        <Link class="MenuHeaderListLink" 
                            activeClass="active"
                            to="WhoDoWeHelp"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Fundacja i organizacje
                        </Link>    
                        <Link class="MenuHeaderListLink" 
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Kontakt
                        </Link>    
                    </div>
                <div className='HeaderHero'>
                    <p>Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce!
                    </p>
                    <div className='HeroDecoration'/>
                    <Buttons/>
                </div>
                </div>
            </div>
    </div>
)

export default Navigation;