import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from "./component/header";
import { Home } from "./component//page/home";
import { About } from "./component/page/about";
import { Services } from "./component/page/services";
import { Work } from "./component/page/work";
import { Blog } from "./component/page/blog";
import { Contact } from "./component/page/contact";
import { Footer } from "./component/footer";

import { pageTitles } from './service/serviceHeader';

import './App.css';
import './css/bootstrap.css';
import './css/icomoon.css';
import './css/animate.css';
import './css/flexslider.css';
import './css/magnific-popup.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="page">
          <Header  pageTitleName={pageTitles[0].name} />
          <div className='content-body'>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/services' component={ Services } />
            <Route path='/work' component={ Work } />
            <Route path='/blog' component={ Blog } />
            <Route path='/contact' component={ Contact } />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;