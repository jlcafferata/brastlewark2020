import React from 'react';
import PropTypes from 'prop-types';
import spinner from '../../utils/images/spinner.gif';

const Spinner = ({className, containerClass = ''}) => {
  return (
    <div className={`spinner ${containerClass}`}>
      <img alt="Loading" className={className} src={spinner} />
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  containerClass: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
  containerClass: '',
};

export default Spinner;
