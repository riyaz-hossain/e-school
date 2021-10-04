import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import AllCourse from './Component/AllCourse/AllCourse';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/all-course">
            <AllCourse />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <div className="text-center d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100vw" }}>
              <h3 >Error 4O4 Page Not Found </h3>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
export default App;