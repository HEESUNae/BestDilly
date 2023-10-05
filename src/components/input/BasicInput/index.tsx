import { StyledBasicInput } from './style';

interface BasicInputProps {
  type?: 'text' | 'file';
  label: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  formValue?: any;
}

const BasicInput = ({ type = 'text', label, value, onClick, onChange, formValue }: BasicInputProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicInput type={type} defaultValue={value} onClick={onClick} onChange={onChange} {...formValue} />
    </label>
  );
};

export default BasicInput;
