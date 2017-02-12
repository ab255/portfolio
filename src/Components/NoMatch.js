import React from 'react';
import Link from 'react-router';
import '../styles/nomatch.css';


const NoMatch = () => {
  return (
    <main>
      <h1>The URL you are trying to reach does not exist, please hang up and try the link below.</h1>
      <Link to='./'><h2>Home Page</h2></Link>
    </main>
  )
}
 export default NoMatch;
