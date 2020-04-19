import * as types from '../actionTypes'
import initialStates from './initialStates'

export default function gnomeDataReducer(state = initialStates, action = {}) {
  switch (action.type) {
    case types.INHABITANTS_LOAD_DATA:
      return {
        ...state,
        population: action.data,
        dataFiltered: action.data,
      }
    case types.INHABITANTS_LOAD_FILTERS:
      return {
        ...state,
        professions: {
          options: action.data.professions,
        },
        hair: {
          options: action.data.hair,
        },
        height: {
          min: action.data.heightMin,
          max: action.data.heightMax,
          from: action.data.heightMin,
          to: action.data.heightMax,
        },
        weight: {
          min: action.data.weightMin,
          max: action.data.weightMax,
          from: action.data.weightMin,
          to: action.data.weightMax,
        },
        age: {
          min: action.data.ageMin,
          max: action.data.ageMax,
          from: action.data.ageMin,
          to: action.data.ageMax,
        },
        showDetail: false,
      }
    case types.SET_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      }
    case types.SET_FETCH_READY:
      return {
        ...state,
        loading: false,
      }
    case types.APPLY_FILTERS:
      return {
        ...state,
        population: action.data,
      }
    default:
      return state
  }
}
