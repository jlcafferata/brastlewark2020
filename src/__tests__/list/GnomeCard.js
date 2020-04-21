import React from 'react';
import {shallow} from 'enzyme';
import GnomeCard from '../../components/list/GnomeCard';
import findByTestAttr from '../../testUtils/utils';

const setup = (props = {}) => {
  const component = shallow(<GnomeCard {...props} />);
  return component;
};

describe('GnomeCard Component', () => {
  it('Should not render any card', () => {
    const component = setup();
    const wrapper = findByTestAttr(component, 'gnome-element');
    expect(wrapper.length).toBe(0);
  });

  it('Should render a gnome full card element without problem', () => {
    const props = {gnome: {id: 1, name: 'GnomeTestName'}};
    const component = setup(props);
    const wrapper = findByTestAttr(component, 'gnome-element');
    expect(wrapper.length).toBe(1);
  });
});
