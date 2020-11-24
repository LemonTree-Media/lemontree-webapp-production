import React from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import VideoEmbed from '../../VideoEmbed';
import VideoEmbedMobile from '../../VideoEmbedMobile';

function HomepageTestimonial(props) {
    let LEFT, RIGHT;
    props.videoPosition === "right" ? RIGHT = true : LEFT = true;

    
    return (
        <div className="mx-medium mb-5 mt-5 justify-content-center">
          <Row className="row">
            { LEFT &&
              <div>
                <Col className="col text-left testVideo mb-2" xl={6} xs={12} md={12}>
                  <VideoEmbed videoLink={props.videoLink} />
                  <VideoEmbedMobile videoLink={props.videoLink} />
                </Col>
                <div className="spacer"> </div>
              </div>
            }
            <Col className="col" xl={6} xs={12} md={12}>
              <div className="d-flex flex-row">
                <img src={props.image} alt={props.name} className="profile mr-3 mt-2" />
                <div>
                  <div className="h4 mt-2">{props.name} |  {props.company}</div>
                  <div className="h5 mb-4">{props.title}</div>
                </div>
              </div>
              <div className="text-left">
                <p>{props.text}</p>
              </div>
            </Col>
            { LEFT && 
              <div>
                <div className="spacer"> </div>
                <Col className="col" xl={6} xs={12} md={12}>
                  {props.children}
                </Col>
              </div>
            }
          </Row>

        </div>
    );
}

export default HomepageTestimonial;
