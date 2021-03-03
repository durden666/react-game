import React from 'react'
import logo from '../../assets/img/logo.svg'
const Footer = () => {
  return (
    <div className="footerContainer">
      <span>2021</span>
      <a href="https://github.com/durden666" className="account">Author's GitHub account</a>
      <a className="logoContainer" href="https://rs.school/js/">
        <img src={logo} className="logo" />
      </a>
    </div>
  );
}

export default Footer;
