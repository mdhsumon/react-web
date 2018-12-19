import React, { Component } from 'react';
import { Header } from "./component/header";
import { WhatWeDo } from "./component/what-we-do";
import { Footer } from "./component/footer";
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
      <div id="page">
        <Header />
        <WhatWeDo />
        <Footer />
      </div>
    );
  }
}

export default App;
