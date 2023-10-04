import { StyledPrimaryCheck } from './style';
import { LocalCheckProps } from '../../../types';

interface PrimaryCheckProps {
  checkList: LocalCheckProps[];
  onChange: (checkId: number) => void;
}

const PrimaryCheck = ({ checkList, onChange }: PrimaryCheckProps) => {
  return (
    <StyledPrimaryCheck>
      {checkList.map((list, index) => (
        <div key={`checkList-${index}`}>
          <input type="checkbox" id={`local${list.id}`} checked={list.checked} onChange={() => onChange(list.id)} />
          <label htmlFor={`local${list.id}`}>{list.name}</label>
        </div>
      ))}
    </StyledPrimaryCheck>
  );
};

export default PrimaryCheck;
