import React from 'react';
import {useSelector} from 'react-redux';
import {getTranslate} from 'react-localize-redux';

const CustomSelect = ({placeholder, list, firstOption, onChange}) => {
  const translate = useSelector((state) => getTranslate(state.localize));

  let flagFirts = true;
  return (
    <select placeholder={translate(placeholder)} onChange={onChange}>
      {list.map((item) => {
        if (flagFirts) {
          flagFirts = false;
          return (
            <option key="-1" value="">
              {translate(firstOption)}
            </option>
          );
        }
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default CustomSelect;
