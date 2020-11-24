import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import { createPopper } from '@popperjs/core';

import Trusted from './trusted.svg'
import Data1 from './data1.svg'
import Data2 from './data2.svg'
import tooltip from './Tooltip'

function HomepageData() {

    return (
    	<Container fluid>
          <div className="homepage-data">
          <img src={Trusted} alt="trusted" />
          <h2>Your search for the right video marketing partner ends here.</h2>
          <img id="data1" src={Data1} />
          <img id="data2" src={Data2} />
		</div>
		</Container>

)
       
}

export default HomepageData;
