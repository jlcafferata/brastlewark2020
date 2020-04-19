import React from 'react'
import { Translate } from 'react-localize-redux'
import MultipleItems from './utils/MultipleItems'

const GnomeCard = ({
  gnome: {
    id,
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions = [],
    friends = [],
  } = {},
}) => {
  return (
    <div className="gnome-element" key={id}>
      <div className="gnome-description">
        <div className="gnome-avatar">
          <img src={thumbnail} alt={name} />
          <div className="gnome-name">{name}</div>
        </div>
        <div className="gnome-height">
          <Translate id="gnome.height" />:{height}
        </div>
        <div className="gnome-weight">
          <Translate id="gnome.weight" />:{weight}
        </div>
        <div className="gnome-age">
          <Translate id="gnome.age" />:{age}
        </div>
        <div className="gnome-hair-color">
          <Translate id="gnome.hair" />:{hair_color}
        </div>
        <div className="gnome-friends">
          <Translate id="gnome.friends" />
          &nbsp;
          {friends.length > 0 && <MultipleItems items={friends} />}
        </div>
        <div className="gnome-professions">
          <Translate id="gnome.professions" />
          &nbsp;
          <MultipleItems items={professions} />
        </div>
      </div>
      <i className="gnome-zoom fas fa-search-plus" style={{ cursor: 'pointer' }}></i>
    </div>
  )
}

export default GnomeCard
