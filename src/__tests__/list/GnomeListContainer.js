import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';
import findByTestAttr from '../../testUtils/utils';
import GnomeListContainer from '../../components/list/GnomeListContainer';

const setup = (props = {}) => {
  const component = shallow(
    <Provider store={store}>
      <GnomeListContainer {...props} />
    </Provider>
  );
  return component;
};

describe('GnomeListContainer Component', () => {
  it('Should not render any Gnome Card, because there is not present any list', () => {
    const component = setup();
    const wrapper = findByTestAttr(component, 'gnome-list');
    expect(wrapper.length).toBe(0);
  });

  it('Should render 1 Gnome Card, because just 1 of them is setting with display:true', () => {
    const props = {
      population: [
        {id: 1, name: 'GnomeTestName', display: true},
        {id: 2, name: 'GnomeTestName2', display: false},
      ],
    };
    const component = setup(props);
    const wrapper = findByTestAttr(component, 'gnome-list');
    expect(wrapper.length).toBe(0);
  });
});
