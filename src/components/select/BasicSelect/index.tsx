import { locals } from '../../../data';
import { StyledSelect } from './style';

interface BasicSelectProps {
  label?: string;
  formValue?: any;
  value?: string;
  required?: boolean;
}

const BasicSelect = ({ label, formValue, value, required }: BasicSelectProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledSelect {...formValue} value={value} required={required}>
        {locals.map(
          (local, index) =>
            local.name !== '전국' && (
              <option value={local.name} key={`local-${index}`}>
                {local.name}
              </option>
            )
        )}
      </StyledSelect>
    </label>
  );
};

export default BasicSelect;
