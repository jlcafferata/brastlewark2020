import React from 'react'
import FilterAge from './filters/FilterAge'
import FilterHeight from './filters/FilterHeight'
import FilterWeight from './filters/FilterWeight'
import FiltersSelected from './filters/FiltersSelected'
import FilterProfession from './filters/FilterProfession'
import FilterName from './filters/FilterName'

const GnomeFilters = () => {
  return (
    <div className="gnome-filterGroup">
      <FilterProfession />
      <FilterName />
      <FilterAge />
      <FilterHeight />
      <FilterWeight />
      <hr />
      <FiltersSelected />
    </div>
  )
}

export default GnomeFilters
