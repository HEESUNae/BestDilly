import { IconImage } from '../../../image';
import { StyledBestModal } from './style';

interface BestModalProps {
  children: JSX.Element;
  onClick?: () => void;
}

const BestModal = ({ onClick, children }: BestModalProps) => {
  return (
    <StyledBestModal>
      <div className="view-modal">
        <div className="modal-container">
          <button type="button" className="modal-close-btn" onClick={onClick}>
            <img src={IconImage.iconClose} alt="닫기" />
          </button>
          {children}
        </div>
      </div>
    </StyledBestModal>
  );
};

export default BestModal;
