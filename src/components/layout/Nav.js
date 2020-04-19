import React from 'react'
import { Translate } from 'react-localize-redux'
import classnames from 'classnames'
import { NavLink, Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'
import brastlewarkLogo from '../../utils/images/logo.svg'

const Nav = ({ languages, setActiveLanguage }) => {
  return (
    <nav className="nav">
      <section className="menu">
        <Link to="/" className="brand">
          <img src={brastlewarkLogo} alt="Brastlewark" />
          <h1>Brastlewark</h1>
        </Link>
        <div className="menu-item menu-item-links">
          <NavLink to="/aboutUs">
            <Translate id="dashboard.aboutUs" />
          </NavLink>
          <NavLink to="/gnomeList">
            <Translate id="dashboard.gnomeList" />
          </NavLink>
        </div>
        <div className="menu-item-languages">
          <p>
            <Translate id="footer.languages" />
          </p>
          <div className="language-list">
            {languages.map((language) => (
              <div key={language.code}>
                <img
                  src={language.src}
                  alt={language.name}
                  className={classnames('language-list-flag', {
                    onfocus: language.active,
                  })}
                  onClick={() => setActiveLanguage(language.code)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </nav>
  )
}

export default withLocalize(Nav)
