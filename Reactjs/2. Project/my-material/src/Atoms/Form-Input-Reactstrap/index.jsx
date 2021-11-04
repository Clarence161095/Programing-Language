import React from 'react';
import PropTypes from 'prop-types';
import {
	FormFeedback,
	FormGroup,
	FormText,
	Input,
	Label,
} from 'reactstrap';

FormInputReactstrap.propTypes = {
	field: PropTypes.object,
	fieldState: PropTypes.object,
	input: PropTypes.object,
};

FormInputReactstrap.defaultProps = {
	field: null,
	fieldState: null,
	input: {},
};

function FormInputReactstrap(props) {
	const { field, fieldState, input } = props;
	const { name } = field;
	const { error, isTouched } = fieldState;
	const { label, help_text } = input;
	const showError = error?.message && isTouched;

	return (
		<FormGroup floating>
			<Input
				{...input}
				{...field}
				id={name}
				placeholder={label}
				invalid={showError}
			/>
			{label && <Label for={name}>{label}</Label>}
			{showError && (
				<FormFeedback invalid>
					{error?.message}
				</FormFeedback>
			)}

			{help_text && <FormText>{help_text}</FormText>}
		</FormGroup>
	);
}

export default FormInputReactstrap;
