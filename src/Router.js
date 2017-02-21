import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import NoMatch from './Components/NoMatch';
import Footer from './Components/Footer';
import './styles/index.css';

class Router extends React.Component {
  constructor () {
    super()
    this.state = {
      className: 'scroll'
    }
  }
  render () {
    return (
      <BrowserRouter>
        <div className={this.state.className}>
          <Header openModal={() => this.noScroll()} closeModal={() => this.scroll()}/>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/projects" component={Projects} />
          <Miss component={NoMatch} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
  noScroll() {
    this.setState({ className: 'no-scroll' })
  }
  scroll() {
    this.setState({ className: 'scroll' })
  }
}

export default Router;
