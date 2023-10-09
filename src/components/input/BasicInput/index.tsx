import { StyledBasicInput } from './style';

interface BasicInputProps {
  type?: 'text' | 'file';
  label: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  formValue?: any;
  required?: boolean;
}

const BasicInput = ({ type = 'text', label, value, onClick, onChange, formValue, required }: BasicInputProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicInput
        type={type}
        defaultValue={value}
        required={required}
        onClick={onClick}
        onChange={onChange}
        {...formValue}
      />
    </label>
  );
};

export default BasicInput;
