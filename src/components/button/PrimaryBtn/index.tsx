import { FormEvent } from 'react';
import { StyledPrimaryBtn } from './style';

type PrimaryType = {
  type?: 'button' | 'submit';
  isIcon?: string;
  title: string;
  onClick?: () => void;
};

const PrimaryBtn = ({ type = 'button', title, isIcon, onClick }: PrimaryType) => {
  return (
    <StyledPrimaryBtn>
      <button type={type} onClick={onClick}>
        {isIcon && <img src={isIcon} alt="" />}
        {title}
      </button>
    </StyledPrimaryBtn>
  );
};

export default PrimaryBtn;
