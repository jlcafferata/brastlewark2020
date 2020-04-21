import gnomeDataReducer from '../../../store/reducers/gnomeDataReducer';
import * as types from '../../../store/actionTypes';

describe('Gnome DataReducer store', () => {
  it('Should return a list of gnomes', () => {
    const inhabitants = gnomeDataReducer({type: types.INHABITANTS_LOAD_DATA});
    expect(inhabitants.length).not.toBeNull();
  });
});
