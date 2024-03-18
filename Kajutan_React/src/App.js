import Home from './pages/index';
import Meny from './pages/meny';
import Bord from './pages/bokabord';
import Om from './pages/om';
import Kontakt from './pages/kontakt';
import Header from './component/header';
import Footer from './component/footer';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="kajutan-react" Component={Home} />
          <Route path="meny" Component={Meny} />
          <Route path="bokabord" Component={Bord} />
          <Route path="om" Component={Om} />
          <Route path="kontakt" Component={Kontakt} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
