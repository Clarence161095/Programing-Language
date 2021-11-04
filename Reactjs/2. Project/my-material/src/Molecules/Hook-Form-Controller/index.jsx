import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FormInput from '../../Atoms/Form-Input-Reactstrap';

HookFormController.propTypes = {
	control: PropTypes.object,
	input: PropTypes.object,
};

HookFormController.defaultValue = {
	control: null,
	input: null,
};

function HookFormController(props) {
	const { control, input } = props;

	const { name, default_value } = input;

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={default_value}
			render={({ field, fieldState }) => (
				<FormInput
					field={field}
					fieldState={fieldState}
					input={{ ...input }}
				/>
			)}
		/>
	);
}

export default HookFormController;
