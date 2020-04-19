import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getInhabitants } from '../../store/actions/gnomeActions'
import GnomeListContainer from '../list/GnomeListContainer'
import GnomeFilters from '../list/GnomeFilters'
import Spinner from '../commons/Spinner'

const GnomeList = () => {
  const { loading = true, population = [] } =
    useSelector((state) => state.gnomeData) || {}

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInhabitants())
  }, [dispatch])

  return (
    <div className="gnome-wrapper">
      <div className="gnome-wrapper-list">
        {!loading ? <GnomeFilters /> : <Spinner />}
      </div>
      <GnomeListContainer population={population} />
    </div>
  )
}

export default GnomeList
