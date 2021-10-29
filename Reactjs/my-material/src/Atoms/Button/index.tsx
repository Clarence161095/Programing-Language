import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Button',
  handleClick: null,
};

function Button(props: any) {
  return (
    <button onClick={() => props.handleClick(props.title)}>
      {props.title}
    </button>
  );
}

export default Button;
