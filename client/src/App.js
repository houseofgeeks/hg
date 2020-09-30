import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Members from "./components/Members/Members";
import Sponsors from "./components/Sponsors/Sponsors";
import Event from "./components/Event/Event";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import CompetitiveCoding from './components/Community/Communities/CompetitiveCoding.community';
import Design from './components/Community/Communities/Design.community';
import Electronics from './components/Community/Communities/Electronics.community';
import MachineLearning from './components/Community/Communities/MachineLearning.community';
import Robotics from './components/Community/Communities/Robotics.community';
import WebDAppD from './components/Community/Communities/WebDAppD.community';
import Admin from './components/Admin/Admin';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/members" component={Members} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/competitive-coding" component={ CompetitiveCoding } />
          <Route exact path="/design" component={ Design } />
          <Route exact path="/electronics-iot" component = { Electronics } />
          <Route exact path="/machine-learning" component = { MachineLearning } />
          <Route exact path="/robotics" component={ Robotics } />
          <Route exact path="/webd-appd" component= { WebDAppD } />
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/admin" component={Admin}/>
          <Route path="/" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
