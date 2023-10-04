import React from 'react';
import { StyledBasicTextarea } from './style';

interface BasicTextareaProps {
  label: string;
}

const BasicTextarea = ({ label }: BasicTextareaProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicTextarea />
    </label>
  );
};

export default BasicTextarea;
