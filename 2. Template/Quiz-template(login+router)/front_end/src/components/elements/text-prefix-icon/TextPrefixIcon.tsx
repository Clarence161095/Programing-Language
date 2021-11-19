import React from 'react';
import { WarningOutlined } from '@ant-design/icons'
import './TextPrefixIcon.scss';

function TextPrefixIcon(props: any) {
  const { text, color, children } = props;
  return (
    <div className="text-prefix-icon" style={{ color: color ? color : '#e74c3c' }}>
      <div className='text-prefix-icon__icon'>
        {children ? children : <WarningOutlined />}
      </div>
      <p>{text ? text : 'Please check your input!'}</p>
    </div>
  );
}

export default TextPrefixIcon;