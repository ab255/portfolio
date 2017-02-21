import React from 'react';
import { Link } from 'react-router';
import Modal from './Contact';
import '../styles/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }
  render () {
    return (
      <header>
        <div className='container'>
          <Link to='./'>
          <img src="../assets/ABLogo.png" alt="logo" title="Adam Bernard Logo" className='logo' height="50px" width="50px"/>
          </Link>
          <Link to='./'>
            <h1 className='header-text'>adam_BERNARD</h1>
          </Link>
          <nav className='nav'>
            <div className='nav-links'>
              <Link to='/'>
                Home
              </Link>
              <Link to='/projects'>
                Projects
              </Link>
              <a onClick={() => this.openModal()}>Contact</a>
              <Modal isOpen={this.state.isModalOpen} onClose={() => this.closedModal()} />
              <a href='../assets/AdamBernardResume.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
            </div>
          </nav>
        </div>
      </header>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
    this.props.openModal()
  }
  closedModal() {
    this.setState({ isModalOpen: false })
    this.props.closeModal()
  }
}
 export default Header;
