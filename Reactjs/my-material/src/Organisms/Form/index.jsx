import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormController from '../../Molecules/Form-Controller';

FormReactstrap.propTypes = {};

const validateSchema = yup.object().shape({
	TestNameController: yup
		.string()
		.required()
		.matches(/[a-z]+/i, 'This is not a number'),
});

function FormReactstrap(props) {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(validateSchema),
	});
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormController
				control={control}
				name='TestNameController'
				label='Form Controller Input'
				defaultValue=''
				input={{
					type: 'text',
				}}
				required={true}
				helpText='This field is required.'
			/>
			<input type='submit' />
		</form>
	);
}

export default FormReactstrap;
