import { Input } from 'antd';
import React from 'react';
import './InputFiled.scss';

function InputField(props: any) {
  const { fieldState, field, input } = props;
  const { type } = input;
  return (
    <div className="input-field">
      {
        type === 'password' && <Input.Password
          className={fieldState.error && '--error'}
          {...input}
          {...field}
        />
      }

      {
        type !== 'password' && <Input
          className={fieldState.error && '--error'}
          {...input}
          {...field}
        />
      }
    </div>
  );
}

export default InputField;