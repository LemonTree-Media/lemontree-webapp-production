import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import steps from '../../assets/steps.svg';

function HomepageSteps() {
    return (
        <div className="mb-large d-none d-lg-block">
          <div className="mb-3">
            <div className="ml-5 text-left h2 font-weight-bold" id="ourProcess">
              Leverage our <u>network</u> and <br /> <u>community</u> to produce <br />content in four simple steps.
            </div>
            <img src={steps} alt="LemonTree Media Process" id="ourProcesspic" className="translate-up" />
          </div>
          <div className="mr-3 text-center">
            <Link to="/get-started">
              <Button variant="success">Start Now</Button>
            </Link>
            <br/>
            No sign-up required.
          </div>
        </div>

    );
}

export default HomepageSteps;
