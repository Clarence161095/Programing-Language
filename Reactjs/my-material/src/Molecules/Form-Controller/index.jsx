import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FormInput from '../../Atoms/Form-Input';

FormController.propTypes = {
	control: PropTypes.object,
	input: PropTypes.object,
};

FormController.defaultValue = {
	control: null,
	input: null,
};

function FormController(props) {
	const {
		control,
		name,
		defaultValue,
		label,
		input,
		required,
		helpText,
	} = props;

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field, fieldState }) => (
				<FormInput
					field={field}
					fieldState={fieldState}
					label={label}
					input={{ ...input }}
					required={required}
					helpText={helpText}
				/>
			)}
		/>
	);
}

export default FormController;
