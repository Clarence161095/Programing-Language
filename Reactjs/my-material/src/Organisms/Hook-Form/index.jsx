import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import HookFormController from '../../Molecules/Hook-Form-Controller';

HookForm.propTypes = {};

const validateSchema = yup.object().shape({
	TestNameController: yup
		.string()
		.required()
		.matches(/[a-z]+/i, 'This is not a number'),
});

function HookForm(props) {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(validateSchema),
	});
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<HookFormController
				control={control}
				input={{
					name: 'TestNameController',
					label: 'Form Controller Input',
					type: 'text',
					default_value: '',
					required: true,
					help_text: 'This field is required.',
				}}
			/>
			<input type='submit' />
		</form>
	);
}

export default HookForm;
