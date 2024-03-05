import React from 'react';
import Navbar from '../componenets/';
import AdvancedChart from './AdvancedChart';
import Performance from './Performance';
import Sentiment from './Sentiment';
import AnalystEstimates from './AnalystEstimates';
import AboutBitcoin from './AboutBitcoin';
import Tokenomics from './Tokenomics';
import Team from './Team';
import YouMayAlsoLike from './YouMayAlsoLike';

function Home() {
    return (
        <div>
            <Navbar />
            <AdvancedChart />
            <Navbar />
            <Performance />
            <Sentiment />
            <AnalystEstimates />
            <AboutBitcoin />
            <Tokenomics />
            <Team />
            <YouMayAlsoLike />
        </div>
    );
}

export default Home;