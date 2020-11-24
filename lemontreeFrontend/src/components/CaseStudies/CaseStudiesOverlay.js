import React from 'react';

function CaseStudiesOverlay(props) {
    return (
        <div>
          <em>
            <h4 className="font-weight-bold mb-4">
              {props.clientName} "{props.videoName}"
            </h4>
          </em>
          <div className="left-border mb-5">
            <h4 className="mb-3">The Challenge</h4>
            <em className="gray">{props.challengeText}</em>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">The Story</h4>
            {props.storyText}
          </div>
          <div className="mb-2 p-3 minibox">
            <strong className="h3 text-weight-bold">{props.numCreatives}</strong>
            <div className="line-separator"/>
            LemonTree <br/> Creatives
          </div>
          <div className="mb-2 p-3 minibox">
            <strong className="h3 text-weight-bold">{props.numDaysToDeliver}</strong>
            <div className="line-separator"/>
            Days to <br/> Deliver
          </div>
          <div className="mb-2 p-3 minibox">
            <strong className="h3 text-weight-bold">{props.numAssets}</strong>
            <div className="line-separator"/>
            Creative <br/> Assets
          </div>
        </div>
    );
}

export default CaseStudiesOverlay;

