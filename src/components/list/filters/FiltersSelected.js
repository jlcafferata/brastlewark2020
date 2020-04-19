import React from 'react'
import { useSelector } from 'react-redux'
import { getTranslate, Translate } from 'react-localize-redux'

const FiltersSelected = () => {
  const translate = useSelector((state) => getTranslate(state.localize))
  const [
    { age, height, weight, gnomeSelected, professionSelected },
    { population },
  ] = useSelector((state) => [state.gnomeFilters, state.gnomeData]) || {}

  const visibleAgeFilter =
      (age.from && parseFloat(age.min) !== parseFloat(age.from)) ||
      (age.to && parseFloat(age.max) !== parseFloat(age.to))
        ? `${translate('filters.titles.ageFrom')} ${age.from.toFixed(2)} ${translate(
            'filters.titles.to'
          )} ${age.to.toFixed(2)}`
        : '',
    visibleHeightFilter =
      (height.from && parseFloat(height.min) !== parseFloat(height.from)) ||
      (height.to && parseFloat(height.max) !== parseFloat(height.to))
        ? `${translate('filters.titles.heightFrom')} ${height.from.toFixed(
            2
          )} ${translate('filters.titles.to')} ${height.to.toFixed(2)}`
        : '',
    visibleWeightFilter =
      (weight.from && parseFloat(weight.min) !== parseFloat(weight.from)) ||
      (weight.to && parseFloat(weight.max) !== parseFloat(weight.to))
        ? `${translate('filters.titles.weightFrom')} ${weight.from.toFixed(
            2
          )} ${translate('filters.titles.to')} ${weight.to.toFixed(2)}`
        : '',
    visibleGnomeSelected = gnomeSelected ? `Gnome: like ${gnomeSelected}` : '',
    visibleProfessionSelected = professionSelected
      ? `${translate('filters.titles.profession')} ${professionSelected}`
      : ''

  return (
    <div className="gnome-filter">
      <div className="filter-match">
        {population.filter((data) => data.display).length}{' '}
        <Translate id="filters.titles.match" />
      </div>
      <div className="filter-item">{visibleAgeFilter}</div>
      <div className="filter-item">{visibleHeightFilter}</div>
      <div className="filter-item">{visibleWeightFilter}</div>
      <div className="filter-item">{visibleGnomeSelected}</div>
      <div className="filter-item">{visibleProfessionSelected}</div>
    </div>
  )
}

export default FiltersSelected
