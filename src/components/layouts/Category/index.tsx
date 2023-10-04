import { StyledCategory } from './style';
import { LocalCheckProps } from '../../../types';
import PrimaryCheck from '../../checkbox/PrimaryCheck';

interface CategoryProps {
  categoryList: LocalCheckProps[];
  onChangeCheck: (checkId: number) => void;
}

const Category = ({ categoryList, onChangeCheck }: CategoryProps) => {
  return (
    <StyledCategory>
      <div className="category-container">
        <h2>지역을 선택하세요</h2>
        <div className="category-btns">
          <PrimaryCheck checkList={categoryList} onChange={onChangeCheck} />
        </div>
      </div>
    </StyledCategory>
  );
};

export default Category;
