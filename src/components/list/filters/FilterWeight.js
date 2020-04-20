import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Nouislider from 'react-nouislider';
import wNumb from 'wnumb';
import {applyFilters, setWeightSelected} from '../../../store/actions/gnomeActions';

const FilterWeight = () => {
  const dispatch = useDispatch();
  const {weight, loading} = useSelector((state) => state.gnomeFilters);

  const onChange = (value) => {
    dispatch(setWeightSelected(parseInt(value[0]), parseInt(value[1])));
    setTimeout(function () {
      dispatch(applyFilters());
    }, 200);
  };

  let max = (!loading && weight && weight.max) || 400;
  let min = (!loading && weight && weight.min) || 0;
  let from = (!loading && weight && weight.from) || min;
  let to = (!loading && weight && weight.to) || max;
  return (
    <div className="gnome-filter">
      Weigth ({min.toFixed(2)} - {max.toFixed(2)}):
      <Nouislider
        range={{min: min, max: max}}
        start={[from, to]}
        step={1}
        connect={true}
        format={wNumb({decimals: 0, thousand: '', suffix: ''})}
        tooltips
        onChange={onChange.bind(this)}
      />
    </div>
  );
};

export default FilterWeight;
