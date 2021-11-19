import InputField from 'components/elements/input-field/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import TextPrefixIcon from '../../elements/text-prefix-icon/TextPrefixIcon';
import './FormInput.scss';

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  input: PropTypes.object,
};

FormInput.defaultProps = {
  input: {},
};

function FormInput(props: any) {
  const { name, control, input } = props;
  const { defaultValue } = input;

  return (
    <div className="form-input">

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) =>
        (<>
          <InputField
            fieldState={fieldState}
            field={field}
            input={input}
          />

          {fieldState.error && <TextPrefixIcon text={fieldState.error?.message} />}
        </>)
        }
      />

    </div>
  );
}

export default FormInput;