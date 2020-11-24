import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Icofont from 'react-icofont';

import VideoEmbed90 from '../../VideoEmbed90';
import CaseStudiesOverlay from '../CaseStudiesOverlay';

function VideoContainer(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="m-2 mb-4 video-description">
          <div className="m-0 p-3 d-flex justify-content-between align-items-center">
            <span><em>Time to deliver: 16 days</em></span>
            <span><em>Assets delivered: 2</em></span>
            <span><em>Views: 2M</em></span>
          </div>
          <VideoEmbed90 videoLink={props.videoLink} />
          <div className="mx-3">
            <div className="py-2 d-flex justify-content-between align-items-center">
              <h4 className="font-weight-bold">
                {props.clientName} | {props.videoName}
              </h4>
              <Button className="btn-xs" onClick={handleShow}> View Details </Button>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <CaseStudiesOverlay
                  {...props}
                  challengeText={props.challengeText}
                  storyText={props.storyText}
                  numCreatives={props.numCreatives}
                  numDaysToDeliver={props.numDaysToDeliver}
                  numAssets={props.numAssets}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size="sm" onClick={handleClose}>
                Return
              </Button>
              
            </Modal.Footer>
          </Modal>
        </div>
    );
}

export default VideoContainer;

