import { StyledBasicInput } from './style';

interface BasicInputProps {
  type?: 'text' | 'file';
  label: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
}

const BasicInput = ({ type = 'text', label, value, onClick, onChange }: BasicInputProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledBasicInput type={type} defaultValue={value} onClick={onClick} onChange={onChange} />
    </label>
  );
};

export default BasicInput;
