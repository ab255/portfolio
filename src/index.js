import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import NoMatch from './Components/NoMatch';
import Footer from './Components/Footer';
import './styles/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className='body'>
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/projects" component={Projects} />
        <Miss component={NoMatch} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
