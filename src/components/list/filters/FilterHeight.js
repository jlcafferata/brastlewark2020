import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nouislider from 'react-nouislider'
import wNumb from 'wnumb'

import { setHeightSelected, applyFilters } from '../../../store/actions/gnomeActions'
import { SET_HEIGHT_SELECTED } from '../../../store/actionTypes'
import { Translate } from 'react-localize-redux'

const FilterHeight = () => {
  const dispatch = useDispatch()
  const { height, loading } = useSelector((state) => state.gnomeFilters) || {}

  const onChange = (value) => {
    dispatch(setHeightSelected(parseInt(value[0]), parseInt(value[1])))
    setTimeout(function () {
      dispatch(applyFilters(SET_HEIGHT_SELECTED))
    }, 200)
  }

  let max = (!loading && height && height.max) || 400
  let min = (!loading && height && height.min) || 0
  let from = (!loading && height && height.from) || min
  let to = (!loading && height && height.to) || max

  return (
    <div className="gnome-filter">
      <Translate id="filters.height" />
      &nbsp;({min.toFixed(2)} - {max.toFixed(2)}):
      <Nouislider
        range={{ min: min, max: max }}
        start={[from, to]}
        step={1}
        connect={true}
        format={wNumb({ decimals: 2, thousand: '', suffix: '' })}
        tooltips
        onChange={onChange.bind(this)}
      />
    </div>
  )
}

export default FilterHeight
