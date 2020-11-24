import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import CTA from '../../assets/CTABackground.svg';
import { Link } from 'react-router-dom';

/* import HeroNavbar from './IdeaNetworkHero/HeroNavbar'; */

function IdeaNetworkHero() {
    return (
      <div>
        <div className="mb-5">
          {/* <div className="mb-5 text-center">
              <HeroNavbar/>
              </div> */}
              <img id="CTA" src={CTA} alt="CTA Background" className=""/>
          
          <div className="text-center CTA-center">
           <Link to='/get-started'>
            <Button size="sm"  className="mb-2">Get Started</Button>
          </Link>
            <p className="h6" id="CTAexplainer"> 
              No sign-up required. Get in touch with us to begin a project
            </p>
          </div>
        </div>
        </div>
    );
}

export default IdeaNetworkHero;

