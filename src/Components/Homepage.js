import React from 'react';
import '../styles/homepage.css';


const Homepage = () => {
  return (
    <section className='homepage'>
      <div className='row'>
        <div className='dogs big-image'>
          <div className='big-title-holder'>
            <h2 className='overlay-title big-title'>Dog Lover</h2>
          </div>
        </div>
        <div className='image-holder'>
          <div className='brew-pot small-image'>
            <div className='small-title-holder'>
              <h2 className='overlay-title small-title'>Home Brewer</h2>
            </div>
          </div>
          <div className='disc-golf small-image'>
            <div className='small-title-holder'>
              <h2 className='overlay-title small-title'>Disc Golfer</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='image-holder'>
          <div className='movie-theater small-image'>
            <div className='small-title-holder'>
              <h2 className='overlay-title small-title'>Movie Lover</h2>
            </div>
          </div>
          <div className='mountain-lift small-image'>
            <div className='small-title-holder'>
              <h2 className='overlay-title small-title'>Snowboarder</h2>
            </div>
          </div>
        </div>
        <div className='rock-climbing big-image'>
          <div className='big-title-holder'>
            <h2 className='overlay-title big-title'>Rock Climber</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage;
