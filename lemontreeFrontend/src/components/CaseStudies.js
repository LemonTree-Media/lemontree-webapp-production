import React, { useContext } from 'react';

import { IdeaNetworkProvider } from '../contexts/IdeaNetworkContext';
import CaseStudiesDescription from './CaseStudies/CaseStudiesDescription';
import CaseStudiesFilterList from './CaseStudies/CaseStudiesFilterList';
import IdeaNetworkHero from './IdeaNetwork/IdeaNetworkHero';
import CaseStudiesVideoList from './CaseStudies/CaseStudiesVideoList';

function CaseStudies() {
    return (
        <IdeaNetworkProvider>
          <IdeaNetworkHero />
          <CaseStudiesDescription />
          <hr />
          <CaseStudiesFilterList />
          <CaseStudiesVideoList />
        </IdeaNetworkProvider>
    );
}

export default CaseStudies;

