import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../../Molecules/FormInput';

Form.propTypes = {};

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='FormInput'
        register={register}
        required={true}
        errors={{ errors: errors, warning: 'This field is required.' }}
      />
      <input type='submit' />
    </form>
  );
}

export default Form;
