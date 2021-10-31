import React from 'react';
import PropTypes from 'prop-types';
import {
	FormFeedback,
	FormGroup,
	FormText,
	Input,
	Label,
} from 'reactstrap';

FormInput.propTypes = {
	field: PropTypes.object,
	fieldState: PropTypes.object,
	label: PropTypes.string,
	input: PropTypes.object,
	required: PropTypes.bool,
	helpText: PropTypes.string,
};

FormInput.defaultProps = {
	field: null,
	fieldState: null,
	label: '',
	input: {},
	required: false,
	helpText: '',
};

function FormInput(props) {
	const {
		field,
		fieldState,
		label,
		input,
		required,
		helpText,
	} = props;
	const { name } = field;
	const { error, isTouched } = fieldState;
	const showError = error?.message && isTouched;

	return (
		<FormGroup floating>
			<Input
				{...input}
				{...field}
				id={name}
				placeholder={label}
				required={required}
				invalid={showError}
			/>
			{label && <Label for={name}>{label}</Label>}
			{showError && (
				<FormFeedback invalid>
					{error?.message}
				</FormFeedback>
			)}

			{helpText && <FormText>{helpText}</FormText>}
		</FormGroup>
	);
}

export default FormInput;
