import React from 'react';
import About from './About';
import '../styles/home.css';
import heroImage from '../../public/assets/heroImage.png';

var sectionStyle = {
  backgroundSize: '100%',
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <main>
      <div style={ sectionStyle }>
        <h2 className='heroTitle'>Front End Engineer</h2>
      </div>
      <About />
    </main>
  )
}
 export default Home;
