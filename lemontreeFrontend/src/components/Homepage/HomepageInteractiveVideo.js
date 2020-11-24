import React from 'react';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import interactiveVideo from '../../assets/interactive-video.jpg';

function HomepageInteractiveVideo() {
    return (
        <div className="mb-large mx-medium" id="interactive-portion">
          <p className="h1 font-weight-bold mb-5 text-center">
            What is Interactive Content?
          </p>
          <Row className="row">
            <Col className="col" xl={6} xs={12} md={6} id="interactive-portion-2">
              <div className="mb-3">
                <Icofont size="2" className="iconHome" icon="business-man-alt-3" /> &nbsp;
                <p className="d-inline"> Personalized, data-driven video content </p>
              </div>
              <div className="mb-3">
                <Icofont size="2" className="iconHome" icon="link" /> &nbsp;
                <p className="d-inline"> Video optimized for SEO and conversions </p>
              </div>
              <div className="mb-3">
                <Icofont size="2"  className="iconHome" icon="fire-burn" /> &nbsp;
                <p className="d-inline"> Video with interactive buttons embedded </p>
              </div>
              <div className="mb-3">
                <Icofont size="2" className="iconHome" icon="chart-flow" /> &nbsp;
                <p className="d-inline"> Video with branching storylines </p>
              </div>
              <div className="mb-0">
                <Icofont size="2" className="iconHome" icon="icofont-magic" /> &nbsp;
                <p className="d-inline"> AR, VR, 3D, and other new media formats </p>
              </div>
              <div className="text-center mt-4 mb-3">
             
              </div>
            </Col>
            <Col className="col" xl={6} xs={12} md={6} id="interactive-portion-3">
              <img id="interactive" src={interactiveVideo} alt="Interactive video example" />
            </Col>
          </Row>

        </div>
    );
}

export default HomepageInteractiveVideo;
