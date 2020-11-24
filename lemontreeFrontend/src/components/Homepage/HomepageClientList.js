import React from 'react';

import HomepageClientLogo from './HomepageClientList/HomepageClientLogo';

import logo_cgc from '../../assets/logo_cgc.jpeg';
import logo_ggg from '../../assets/logo_ggg.jpeg';
import logo_olay from '../../assets/logo_olay.jpeg';
import logo_herotech from '../../assets/logo_herotech.jpeg';
import logo_cctv from '../../assets/logo_cctv.jpeg';
import logo_sina from '../../assets/logo_sina.jpeg';
import logo_aic from '../../assets/logo_aic.jpeg';

function HomepageClientList() {
    return (
        <div className="mb-3 mt-4 text-center clientListLogos">
          <p id="clientList"><em className="h6"><b>Join</b> an amazing brand community who trust the LemonTree network, including:</em></p>
          <div className="d-flex justify-content-between mx-5">
            <HomepageClientLogo
                className="align-self-center"
                clientName="Columbia Global Centers"
                src={logo_cgc} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="GGG"
                src={logo_ggg} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="Olay"
                src={logo_olay} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="HeroTech"
                src={logo_herotech} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="CCTV"
                src={logo_cctv} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="Sina"
                src={logo_sina} />
            <HomepageClientLogo
                className="align-self-center"
                clientName="AIC"
                src={logo_aic} />
          </div>

        </div>
    );
}

export default HomepageClientList;
