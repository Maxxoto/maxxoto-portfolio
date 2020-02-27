import React from 'react';
import { Route } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Navbar from './components/Navbar'
import Home from './components/Main'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Traits from './components/Traits'
import Projects from './components/Projects'



const App = () => (
  <>
    <Helmet>
    <title>Maxxoto Portfolio</title>
    <meta name="description" content="Hi , im Maxxoto .Fullstack Web Developer , still learning about AI and Mobile Development . I'm Freelancer too , feel free drop me by ahmatdanis24@gmail.com " />
    </Helmet>
    <Navbar />
    
    <div className="content">
      
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/traits" component={Traits} />
      <Route path="/projects" component={Projects} />
    </div>
  </>


)

export default App;
