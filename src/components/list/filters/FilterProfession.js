import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Translate} from 'react-localize-redux';
import {filterByProfession, applyFilters} from '../../../store/actions/gnomeActions';
import CustomSelect from '../../commons/CustomSelect';

const FilterProfession = () => {
  const dispatch = useDispatch();
  const {professions = []} = useSelector((state) => state.gnomeFilters) || {};

  const setProfessionSelected = (value) => {
    dispatch(filterByProfession(value));
  };

  const onChange = (event) => {
    setProfessionSelected(event.target.value);
    setTimeout(function () {
      dispatch(applyFilters());
    }, 200);
  };
  return (
    <div className="gnome-filter">
      <Translate id="filters.profession" />
      <CustomSelect
        placeholder="filters.placeHolderProfession"
        onChange={onChange}
        list={professions.options || []}
        firstOption="filters.selectAll"
      />
    </div>
  );
};

export default FilterProfession;
