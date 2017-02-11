import React from 'react';
import '../styles/footer.css';


const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container-footer'>
        <section>
          <ul>
            <li><a href="https://github.com/ab255" target="_blank">
              <img src="../assets/Github.png" alt="GitHub Page" title="Adam Bernard's GitHub Page" width="30" height="30" />
            </a></li>
            <li><a href="https://twitter.com/AJBernard2" target="_blank">
              <img src="../assets/Twitter.png" alt="Twitter page" title="Adam Bernard's Twitter Page" width="30" height="25" />
            </a></li>
            <li><a href="https://www.linkedin.com/in/ab255" target="_blank">
              <img src="../assets/LinkedIn.png" alt="LinkedIn page" title="Adam Bernard's LinkedIn Page" width="30" height="30" />
            </a></li>
            <li><a href="mailto:ab255@me.com">
              <img src="../assets/email.png" alt="Email Button" title="Click to Email Adam Bernard" width="30" height="23" />
            </a></li>
          </ul>
        </section>
        <section className="name-location">
          <p>
            Adam Bernard
            <br/>
            2717 W 34th Ave., Denver, CO 80211
          </p>
        </section>
      </div>
    </footer>
  )
}
 export default Footer;
