import React from 'react';
import { render } from 'react-dom';

import Router from './Router';
import './styles/index.css';

const Root = () => {
  return (
    <Router />
  )
}

render(<Root />, document.getElementById('root'));
