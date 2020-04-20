import {
  FILTER_BY_PROFESSION,
  FILTER_BY_NAME,
  SET_AGE_SELECTED,
  SET_WEIGHT_SELECTED,
  SET_HEIGHT_SELECTED,
  SHOW_HIDE_DETAILS,
} from '../actionTypes';
import initialStates from './initialStates';

export default function gnomeFilterReducer(state = initialStates, action = {}) {
  switch (action.type) {
    case FILTER_BY_PROFESSION:
      return {
        ...state,
        professionSelected: action.professionSelected,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        gnomeSelected: action.gnomeSelected,
      };
    case SET_AGE_SELECTED:
      return {
        ...state,
        age: {
          ...state.age,
          from: action.from,
          to: action.to,
        },
      };
    case SET_WEIGHT_SELECTED:
      return {
        ...state,
        weight: {
          ...state.weight,
          from: action.from,
          to: action.to,
        },
      };
    case SET_HEIGHT_SELECTED:
      return {
        ...state,
        height: {
          ...state.height,
          from: action.from,
          to: action.to,
        },
      };
    case SHOW_HIDE_DETAILS:
      return {
        ...state,
        idShowDetail: action.idShowDetail,
      };
    default:
      return state;
  }
}
