import React from 'react';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import collabUX from '../../assets/collab-ux.png';

function HomepageCollaboration() {
    return (
        <div className="mb-large mx-medium">
          <p className="h2 font-weight-bold text-left" >
            Transformation at Speed
          </p>
          <Row className="row">
            <Col className="col" xl={6} xs={12} md={6}>
                <div className="mb-5 mt-5">
               
                <p className="d-inline"> Video content is a must-have for 85% of today's brands, but 90% of the marketers feel that the creative partners they hire for video lack understanding and attention to their brands' business initiatives. <strong>We are here to change that.</strong> </p>
              </div>
            <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">50%</p><p className="mt-2 ml-3 collaboration">time saved in communication</p>
          </div>
          <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">9x</p><p className="mt-2 ml-3 collaboration">more engagment than traditional videos</p>
          </div>
          <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">30%</p><p className="mt-2 ml-3 collaboration">cost savings by repurposing content</p>
          </div>

              <div className="text-left mt-4 mb-3">
              <Link to='/get-started'>
          <Button size="sm" variant="success">Get Started for Free</Button></Link>
              </div>
            </Col>
            <Col className="col" xl={6} xs={12} md={6}>
              <img id="collabUX" src={collabUX} alt="Collaboration Tool UX" />
            </Col>
          </Row>

        </div>
    );
}

export default HomepageCollaboration;
