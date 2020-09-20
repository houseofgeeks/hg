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
import LoginForm from './components/Admin/Login/LoginForm';
import CompetitiveCoding from './components/Community/Communities/CompetitiveCoding.community';
import Design from './components/Community/Communities/Design.community';
import Electronics from './components/Community/Communities/Electronics.community';
import MachineLearning from './components/Community/Communities/MachineLearning.community';
import Robotics from './components/Community/Communities/Robotics.community';
import WebDAppD from './components/Community/Communities/WebDAppD.community';

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin" exact component={LoginForm}/>
          <Route path="/members" exact component={Members} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route path="/event" exact component={Event} />
          <Route path="/community" exact component={Community} />
          <Route path="/competitive-coding" exact component={ CompetitiveCoding } />
          <Route path="/design" exact component={ Design } />
          <Route path="/electronics-iot" exact component = { Electronics } />
          <Route path="/machine-learning" exact component = { MachineLearning } />
          <Route path="/robotics" exact component={ Robotics } />
          <Route path="/webd-appd" exact component= { WebDAppD } />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
