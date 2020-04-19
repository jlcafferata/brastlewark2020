import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByName, applyFilters } from '../../../store/actions/gnomeActions'
import { FILTER_BY_NAME } from '../../../store/actionTypes'
import { Translate, getTranslate } from 'react-localize-redux'

const FilterName = () => {
  const dispatch = useDispatch()
  const translate = useSelector((state) => getTranslate(state.localize))

  const onChange = (event) => {
    dispatch(filterByName(event.target.value))
    setTimeout(function () {
      dispatch(applyFilters(FILTER_BY_NAME))
    }, 200)
  }

  return (
    <div className="gnome-filter">
      <Translate id="filters.name" />
      <input
        className="filter-name-text"
        type="text"
        placeholder={translate('filters.placeHolderName')}
        size="30"
        onKeyUp={onChange.bind(this)}
      />
    </div>
  )
}

export default FilterName
