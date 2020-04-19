import React from 'react'
import { Translate } from 'react-localize-redux'

const aboutUs = () => {
  return (
    <div className="gnome-aboutUs">
      <div className="lockup">
        <h2>Brastlewark</h2>
      </div>
      <p>
        <Translate id="aboutUs.lockup" />
      </p>
      <div className="detailTown">
        <p>
          <span>
            <Translate id="aboutUs.nation" />:
          </span>
          <Translate id="aboutUs.cheliax" />
          <span>
            <Translate id="aboutUs.region" />:
          </span>
          <Translate id="aboutUs.archduchy" />
          <span>
            <Translate id="aboutUs.size" />:
          </span>
          <Translate id="aboutUs.largeTown" />
          <span>
            <Translate id="aboutUs.population" />:
          </span>
          1,335
          <span>
            <Translate id="aboutUs.governmentTitle" />:
          </span>
          <Translate id="aboutUs.overLord" />
          <span>
            <Translate id="aboutUs.alignment" />:
          </span>
          <Translate id="aboutUs.chaotic" />
        </p>
      </div>

      <h3>
        <Translate id="aboutUs.inhabitantsTitle" />
      </h3>
      <p>
        <Translate id="aboutUs.inhabitants" />
      </p>

      <h3>
        <Translate id="aboutUs.geographyTitle" />
      </h3>
      <p>
        <Translate id="aboutUs.geography" />
      </p>

      <h3>
        <Translate id="aboutUs.commerceTitle" />
      </h3>
      <p>
        <Translate id="aboutUs.commerce" />
      </p>

      <h3>
        <Translate id="aboutUs.governmentTitle" />
      </h3>
      <p>
        <Translate id="aboutUs.government" />
      </p>
    </div>
  )
}

export default aboutUs
