import React from 'react';
import '../styles/contact.css';

class Modal extends React.Component {
  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      width: '500px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff',
      borderRadius: '50px',
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.5)'
    }

    return (
      <div className='contact-modal'>
        <div style={modalStyle}>
          <div className='contact-header'>
            <h2 className='contact-title'>Contact Information</h2>
            <img src='../assets/closeButton.svg' alt='Close Contact Modal'
            title="Close Contact Modal" className='close-button' onClick={e => this.close(e)}></img>
          </div>
          <ul className='contact-list'>
            <li>
              <a href="https://github.com/ab255" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src="../assets/Github.png" alt="GitHub Page" title="Adam Bernard's GitHub Page" width="30" height="30" />
              <p>Github</p>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AJBernard2" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src="../assets/Twitter.png" alt="Twitter page" title="Adam Bernard's Twitter Page" width="30" height="25" />
              <p>Twitter</p>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ab255" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src="../assets/LinkedIn.png" alt="LinkedIn page" title="Adam Bernard's LinkedIn Page" width="30" height="30" />
              <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a href="mailto:ab255@me.com" className="contact-link">
              <img src="../assets/email.png" alt="Email Button" title="Click to Email Adam Bernard" width="30" height="23" />
              <p>Email</p>
              </a>
            </li>
          </ul>
          {this.props.children}
        </div>
        <div style={backdropStyle} onClick={e => this.close(e)}/>
      </div>
    )
  }
}

export default Modal;
