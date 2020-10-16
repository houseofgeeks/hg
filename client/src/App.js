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
import Admin from "./components/Admin/Admin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CommunityTemplate from "./components/Community/Communities/CommunityTemplate";
import ScrollToTop from "./components/HOC/withScrollToTop";

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/members" component={ScrollToTop(Members)} />
          <Route exact path="/sponsors" component={ScrollToTop(Sponsors)} />
          <Route exact path="/event" component={ScrollToTop(Event)} />
          <Route exact path="/community" component={ScrollToTop(Community)} />
          <Route exact path="/competitive_coding" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/design" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/electronics_iot" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/machine_learning" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/robotics" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/webd_appd" component={ScrollToTop(CommunityTemplate)} />
          <Route exact path="/" component={ScrollToTop(Home)} />
          <ProtectedRoute exact path="/admin" component={ScrollToTop(Admin)} />
          <Route path="/" component={ScrollToTop(Error)} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
