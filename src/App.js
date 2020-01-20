import React from 'react';
import { Route } from 'react-router-dom'


import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Main'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Traits from './components/Traits'
import Projects from './components/Projects'

const App = () => (
  <div>
    <Navbar />
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/traits" component={Traits} />
      <Route path="/projects" component={Projects} />
    </div>
  </div>


)

export default App;
