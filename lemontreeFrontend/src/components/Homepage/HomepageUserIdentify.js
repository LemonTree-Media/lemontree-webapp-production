import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function HomepageUserIdentify() {
    return (
        <div className="mb-large mx-medium">
          <Row>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mt-5 mr-4 ml-4">
                I am a marketer
              </p>
              <p>
                Use <strong>LemonTree</strong> to facilitate 5x more empathy when working with your in-house or outsourced creatives. Partner with the LemonTree creative network for interactive content.
              </p>
            </Col>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mt-5 mr-4 ml-4">
                I am a creative
              </p>
              <p>
                Use <strong>LemonTree</strong> to streamline your creative process, deepen understanding between you and your clients, and book jobs you are passionate about.
              </p>
            </Col>
          </Row>
          <div className="row text-center userIdentity">
            <div className="col mt-5 d-none d-sm-block">
             <AnchorLink offset={() => 100} href='#offerings'>
              <Button size="sm"> Explore Offerings </Button> </AnchorLink>
            </div>
            <div className="col mt-5 d-none d-sm-block">
              <Button size="sm"> Learn More </Button>
            </div>
          </div>

        </div>
    );
}

export default HomepageUserIdentify;
