import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import TreeColumns from '../TreeColumns/TreeColumns.js';
import EasySteps from '../EasySteps/EasySteps.js';
import AboutUs from '../AboutUs/AboutUs.js';
import WhoDoWeHelp from '../WhoDoWeHelp/WhoDoWeHelp.js';
import Contact from '../Contact/Contact.js';

const Home = () => (
    <>
        <div><Navigation/></div>
        <div><TreeColumns/></div>
        <div><EasySteps/></div>
        <div><AboutUs/></div>
        <div><WhoDoWeHelp/></div>
        <div><Contact/></div>
    </>
)
export default Home;