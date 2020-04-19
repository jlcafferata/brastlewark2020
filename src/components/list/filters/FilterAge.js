import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nouislider from 'react-nouislider'
import wNumb from 'wnumb'
import { Translate } from 'react-localize-redux'

import { setAgeSelected, applyFilters } from '../../../store/actions/gnomeActions'
import { SET_AGE_SELECTED } from '../../../store/actionTypes'

const FilterAge = () => {
  const dispatch = useDispatch()
  const { age, loading } = useSelector((state) => state.gnomeFilters) || {}

  const onChange = (value) => {
    dispatch(setAgeSelected(parseInt(value[0]), parseInt(value[1])))
    setTimeout(function () {
      dispatch(applyFilters(SET_AGE_SELECTED))
    }, 200)
  }

  let max = (!loading && age && age.max) || 400
  let min = (!loading && age && age.min) || 0
  let from = (!loading && age && age.from) || min
  let to = (!loading && age && age.to) || max
  return (
    <div className="gnome-filter">
      <Translate id="filters.age" /> ({min} - {max}):
      <Nouislider
        range={{ min: min, max: max }}
        start={[from, to]}
        step={1}
        connect={true}
        format={wNumb({ decimals: 0, thousand: '', suffix: '' })}
        tooltips
        onChange={onChange.bind(this)}
      />
    </div>
  )
}

export default FilterAge
