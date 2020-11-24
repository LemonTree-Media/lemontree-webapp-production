import React from 'react';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './Logo';

function Footer() {
    return (
        <footer className="mt-3 p-5 mobileHidden">
          <div className="row">
            <div className="col">
              <Logo height={25} /> <br /><br />
              <b>LemonTree Media</b> is the world's leading community and video network for marketers and creatives.<br /><br />
              <Icofont size="2" icon="linkedin" />
              <Icofont size="2" icon="facebook" />
              <Icofont size="2" icon="instagram" />
            </div>
            <div className="col">
              <strong>Our Solution</strong> <br /><br />
              <AnchorLink offset={() => 130} href='#offerings'>Overview</AnchorLink> <br /><br />
              <AnchorLink offset={() => 130} href='#collabUX'>Why Use LemonTree</AnchorLink> <br /><br />
              <AnchorLink offset={() => 130} href='#ourProcess'>Our Process</AnchorLink> <br /><br />
            </div>
            <div className="col">
              <strong>Content</strong><br /><br />
              <Link to="/idea">Idea Network</Link><br /><br />
              <Link to="/idea">Creative Community</Link>
            </div>
            <div className="col" id="AboutNav">
              <strong>About</strong><br /><br />
              <AnchorLink offset={() => 130} href='#offerings'>Our Mission</AnchorLink><br /><br />
              Blog <br /><br />
              Terms of Service<br /><br />
              Privacy Policy <br /><br />
            </div>
            <div className="col" id="contactInfo">
              <strong>Contact</strong> <br /><br />
              <em>Prospective Clients:</em><br/>
              michael@lemontreemedia.io<br/><br/>
              <em>Careers:</em><br/>
              careers@lemontreemedia.io<br /><br />
              <em>Press & Media Relations:</em><br />
              info@lemontreemedia.io
            </div>
          </div>

          <hr />

          <div>
        &copy; 2020 LemonTree Media. All Rights Reserved.
                                   <span className="float-right">
                                     Made with <span role="img" aria-label="love"> &#10084;&#65039; </span> in NYC.
                                   </span>
          </div>
        </footer>

    );
}

export default Footer;
