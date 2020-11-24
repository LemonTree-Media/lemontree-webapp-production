import React from 'react';

import { Route,
         Redirect,
         Switch,
         BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Bidding from './components/Bidding';
import IdeaNetwork from './components/IdeaNetwork';
import CaseStudies from './components/CaseStudies';
import OurServices from './components/OurServices';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Challenges from './components/Challenges';
import CreativeProfile from './components/CreativeProfile';
import ScrollToTop from './components/ScrollToTop'



function App() {
    return (
        <div className="lt-app">
          <Router>
          <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/get-started' exact component={Bidding} />
              <Route path='/idea' exact component={IdeaNetwork} />
              <Route path='/profile' exact component={Homepage} />
              <Route path='/case-studies' exact component={CaseStudies} />
              <Route path='/challenges' exact component={Challenges} />
              <Route path='/our-services' exact component={OurServices} />
              <Route path='/frequently-asked-questions' exact component={FAQ} />
              <Route path='/creative-profile' exact component={CreativeProfile} />
              <Redirect to='/' />
            </Switch>
            <Footer />
          </Router>
        </div>


    );
}

export default App;
 

