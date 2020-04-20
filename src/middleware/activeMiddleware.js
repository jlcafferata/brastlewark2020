import {createActiveMiddleware} from 'redux-active';
import {throttle} from 'lodash';

const activeMiddleware = createActiveMiddleware({
  idleTimeout: 43200000,
  stateSelector: (state) => state.isActive,
  throttle,
});

export default activeMiddleware;
