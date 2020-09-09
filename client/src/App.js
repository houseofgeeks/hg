import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Members from './components/Members/Members';
import Sponsors from './components/Sponsors/Sponsors';
import Event from './components/Event/Event';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/members" exact component={Members} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route path="/event" exact component={Event} />
          <Route path="/community" exact component={Community} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
