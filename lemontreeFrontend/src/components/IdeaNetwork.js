import React, { useContext } from 'react';

import { IdeaNetworkProvider } from '../contexts/IdeaNetworkContext';
import IdeaNetworkDescription from './IdeaNetwork/IdeaNetworkDescription';
import IdeaNetworkFilterList from './IdeaNetwork/IdeaNetworkFilterList';
import IdeaNetworkHero from './IdeaNetwork/IdeaNetworkHero';
import IdeaNetworkShortlist from './IdeaNetwork/IdeaNetworkShortlist';
import IdeaNetworkVideoList from './IdeaNetwork/IdeaNetworkVideoList';

function IdeaNetwork() {
    return (
        <IdeaNetworkProvider>
           {/* <IdeaNetworkShortlist />*/}
            <IdeaNetworkHero />
            <IdeaNetworkDescription />
            <hr />
            <IdeaNetworkFilterList />
            <IdeaNetworkVideoList />
        </IdeaNetworkProvider>
    );
}

export default IdeaNetwork;

