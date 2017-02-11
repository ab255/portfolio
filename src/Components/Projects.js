import React from 'react';
import Cards from './Cards';
import '../styles/projects.css';
import '../styles/home.css';
import heroImage from '../../public/assets/heroImage.png';

var sectionStyle = {
  backgroundSize: '100%',
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat',
};

const Projects = () => {
  return (
    <main>
      <div style={ sectionStyle }>
        <h2 className='heroTitle'>Projects</h2>
      </div>
      <Cards />
    </main>
  )
}
 export default Projects;
