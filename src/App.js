
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotSignIn from "./pages/NotSignIn";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import HomeSignIn from "./pages/HomeSignIn";

function App() {
    const publicRoutes = [
        { path: '/', component: NotSignIn},
        { path: '/login', component: SignIn},
        { path: '/profile', component: Profile},
        { path: '/home',component:HomeSignIn},
    ]
  return (
      <Router>
          <div className="App">
              <Routes>
                  {publicRoutes.map((route,index) => {
                      const Page = route.component;
                      return (
                          <Route
                              key={index}
                              path={route.path}
                              element={<Page/>}
                          />
                      )
                  })}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
