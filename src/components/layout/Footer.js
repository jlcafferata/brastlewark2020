import React from 'react'
import brastlewarkLogo from '../../utils/images/logo.svg'

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="info">
        <img className="logo" src={brastlewarkLogo} alt="Brastlewark" />
        <p className="version">Brastlewark</p>
        <span className="trade-mark">TM</span>
      </div>
    </footer>
  )
}

export default Footer
