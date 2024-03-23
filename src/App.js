
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotSignIn from "./pages/NotSignIn";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import HomeSignIn from "./pages/HomeSignIn";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/job4-testFE"  element={<NotSignIn />}/>
                  <Route path="/login"  element={<NotSignIn />}/>
                  <Route path="/profile"  element={<NotSignIn />}/>
                  <Route path="/home"  element={<NotSignIn />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
