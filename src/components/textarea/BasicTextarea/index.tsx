import React from 'react';
import { StyledBasicTextarea } from './style';

interface BasicTextareaProps {
  label: string;
  formValue?: any;
  value?: string;
  required?: boolean;
}

const BasicTextarea = ({ label, formValue, value, required }: BasicTextareaProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicTextarea {...formValue} defaultValue={value} required={required} />
    </label>
  );
};

export default BasicTextarea;
