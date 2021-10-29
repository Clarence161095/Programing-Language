import React from 'react';
import PropTypes from 'prop-types';

FormInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  required: PropTypes.bool,
  errors: PropTypes.object,
};

FormInput.defaultProps = {
  label: 'label',
  register: {},
  required: false,
  errors: {
    errors: {},
    warning: '',
  },
};

function FormInput(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        {...props.register(props.label, { required: props.required })}
      />
      {props.errors.errors[props.label] && (
        <p>{`${props.errors.warning} ~ ${props.label}`}</p>
      )}
    </>
  );
}

export default FormInput;
