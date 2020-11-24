import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import HomepageTestimonial from './HomepageTestimonialList/HomepageTestimonial';
import jacob from '../../assets/jacob.jpeg';
import meryl from '../../assets/meryl.jpeg';


function HomepageTestimonialList() {
    return (
        <div className="mb-large text-center">
          <HomepageTestimonial
              name="Meryl T."
              company="Gramercy Gift Guide"
              title="Chief Marketing Officer"
              text="LemonTree became a true brand partner and delved into understanding my brand and target customers."
              image={meryl}
              videoPosition="left"
              videoLink="https://embedder.wirewax.com/8176540/?autoStart=true&"
          />
          <HomepageTestimonial
              name="Jacob U."
              company="HeroTech"
              title="Chief Experience Officer"
              text="LemonTree went above and beyond my expectation to deliver something meaningful. The story was empowering. Simply stunning."
              image={jacob}
              videoPosition="left"
              videoLink="https://embedder.wirewax.com/8176535/?autoStart=true&"
          />

          {/*<Button size="sm" variant="outline-secondary">
            View More Case Studies
          </Button>*/}

        </div>
    );
}

export default HomepageTestimonialList;
