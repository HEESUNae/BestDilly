import React from 'react';
import { StyledBasicTextarea } from './style';

interface BasicTextareaProps {
  label: string;
  formValue?: any;
}

const BasicTextarea = ({ label, formValue }: BasicTextareaProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicTextarea {...formValue} />
    </label>
  );
};

export default BasicTextarea;
