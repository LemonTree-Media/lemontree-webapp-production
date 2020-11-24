import React,{useState} from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AnchorLink from 'react-anchor-link-smooth-scroll'

function HomepageWhyUs() {


    return (
        <div className="mb-large mx-medium text-center" id="ourOfferings">
          <Row className="d-flex justify-content-between mb-8">
            
             <Col xl={3} xs={9} md={9} id="ourOfferings">
             <Icofont size="2" icon="icofont-video-cam" />
              <div className="h4 font-weight-bold mb-4 mt-3">Idea Network</div>
              <div className="text-center mt-3">
                <p>
                  Leverage a global network of content ideas that worked. Get inspired.
                </p>
              </div>
            </Col>

          <Col xl={3} xs={9} md={9} id="ourOfferings">
             <Icofont size="2" icon="icofont-youtube-play" />
              <div className="h4 font-weight-bold mb-4 mt-3">Collaboration</div>
              <div className="text-center mt-3">
                <p>
                  Use our collaboration tool to communicate via ideas and videos.
                </p>
              </div>
            </Col>

            <Col xl={3} xs={9} md={9} id="ourOfferings">
            <Icofont size="2" icon="icofont-tick-mark" />
              <div className="h4 font-weight-bold mb-4 mt-3">Community</div>
              <div className="text-center mt-3">
                <p>
                  Work with an always-on, dedicated team of creatives for your brand.
                </p>
              </div>
            </Col>
            <Col xl={3} xs={9} md={9} id="ourOfferings">
            <Icofont size="2" icon="icofont-diamond" />
              <div className="h4 font-weight-bold mb-4 mt-3">All-in-one</div>
              <p className="text-center mt-3">
                 Contact us for an all-in-one, premium solution from concept to launch.
              </p>
            </Col>
          </Row>
          <AnchorLink offset={() => 130} href='#interactive-portion'>
            <Button size="sm" className="mt-5">What is Interactive Content?</Button> <br /><br />
          </AnchorLink>
        </div>
    );
}

export default HomepageWhyUs;
