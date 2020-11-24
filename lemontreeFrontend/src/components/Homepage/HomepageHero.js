import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero-img.svg';
import heroMobile from '../../assets/hero-mobile.png';

function HomepageHero() {
    return (
    	<div>
	        <div className="bg">
	        	<img src={hero} alt="LemonTree Media Hero" className="translate-up heroImage" />
	          <div id="hero-text" className="h1 font-weight-bold top-left">Grow your brand with Interactive Content </div>
	          <div className="h5 heroExplain">Interactive content creation & collaboration leveraging a global network of content ideas and always-on, freelance creatives</div>
	          <Link to='/get-started'>
	          <Button size="sm top-right" variant="success">Get Started for Free</Button></Link>
	        </div>
	        <div className="bg-mobile">
	        	<img src={heroMobile} alt="LemonTree Media Hero" className="heroImageMobile" />
	          <div id="hero-text" className="h1 font-weight-bold top-left">Grow your brand with Interactive Content </div>
	          <div className="h5 heroExplainMobile">Interactive content creation & collaboration leveraging a global network of content ideas and always-on, freelance creatives</div>
	          <Link to='/get-started'>
	          <Button size="sm top-right" variant="success">Get Started for Free</Button></Link>
	        </div>
        </div>
    );
}

export default HomepageHero;
