import { locals } from '../../../data';
import { StyledSelect } from './style';

interface BasicSelectProps {
  label?: string;
}

const BasicSelect = ({ label }: BasicSelectProps) => {
  return (
    <label>
      <p>{label}</p>
      <StyledSelect>
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
