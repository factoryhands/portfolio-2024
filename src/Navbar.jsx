import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import App from "./App";

const styles = {
  link: {
    fontSize: "32px",
    marginRight: "16px",
    marginLeft: "16px",
    textDecoration: "none"
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',  // Changed from 'flex-start' to 'space-between'
    paddingTop: "24px",
    marginRight: "24px",
    marginLeft: "24px",
    borderBottom: '1px solid black', 
    paddingBottom: "24px",
    position: 'sticky', //make navbar sticky
    top: 0,
    zIndex: 100, // the navbar will always show up on top of the other elements
    background: '#FFFFFF'
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

const Navbar = () => {
    return (
        <div style={styles.navContainer}>
          <Link to="/" style={styles.link}>Jennifer Spriggs</Link>
          <div style={styles.linksContainer}>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </div>
    );
}
export default Navbar;