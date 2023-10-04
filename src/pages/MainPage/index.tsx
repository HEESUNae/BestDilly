import { useState } from 'react';

import { bestList } from '../../data';
import { StyledMainPage } from './style';
import { IconImage } from '../../image';
import { BestListProps } from '../../types';
import { useCategory } from '../../hooks/useCategory';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layouts/Layout';
import Category from '../../components/layouts/Category';
import BestModal from '../../components/modal/BestModal';
import KakaoMap from '../../components/Map';
import PrimaryBtn from '../../components/button/PrimaryBtn';

const MainPage = () => {
  const newList = bestList.sort((a, b) => b.favorite - a.favorite);
  const [lists, setLists] = useState<BestListProps[]>(newList);
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState<BestListProps | null>(null);

  const navigate = useNavigate();

  // 체크박스 지역
  const { categoryList, onLocalCheck } = useCategory();

  // 체크박스 선택
  const onChangeCheck = (checkId: number) => {
    onLocalCheck(checkId, setLists);
  };

  // 모달 활성화, 내용전달
  const onViewModal = (list?: BestListProps) => {
    list ? setModalContent(list) : setModalContent(null);
    setIsModal(!isModal);
    document.body.style.overflow = isModal ? 'unset' : 'hidden';
  };

  // 수정/삭제 준비중 팝업
  const onPrepairing = () => {
    alert('현재 CRUD API가 없으므로 해당기능은 제공하지 않습니다.');
  };

  return (
    <StyledMainPage>
      <Layout>
        {/* 지역 카테고리 */}
        <Category categoryList={categoryList} onChangeCheck={onChangeCheck} />
        {/* 베스트 맛집 */}
        <div className="best-board">
          <div className="best-title-container">
            <h2>베스트 맛집</h2>
            <PrimaryBtn title="맛집등록" isIcon={IconImage.iconCook} onClick={() => navigate('/write')} />
          </div>
          {lists.length === 0 && <div className="not-find">검색결과가 없습니다.</div>}
          <ul className="list-container">
            {lists.map((list, index) => (
              <li key={`best-list${index}`} onClick={() => onViewModal(list)}>
                <figure className="photo">
                  <img src={list.image} alt={list.title} />
                </figure>
                <div className="info">
                  <p className="info-local">
                    <img src={IconImage.iconPin} alt="" />
                    <span>{list.local}</span>
                  </p>
                  <p className="info-title">{list.title}</p>
                  <div className="info-favorite">
                    <img src={IconImage.iconHart} alt="찜하기" /> {list.favorite}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 자세히보기 팝업 */}
        {isModal && modalContent && (
          <BestModal onClick={onViewModal}>
            <div>
              <figure className="photo">
                <img src={modalContent.image} alt={modalContent.title} />
              </figure>
              <div className="info">
                <p className="info-local">
                  <img src={IconImage.iconPin} alt="" />
                  <span>{modalContent.local}</span>
                </p>
                <p className="info-title">{modalContent.title}</p>
                <p className="info-desc">{modalContent.desc}</p>
                <div className="info-favorite">
                  <button onClick={onPrepairing}>
                    <img src={IconImage.iconHart} alt="찜하기" /> {modalContent.favorite}
                  </button>
                </div>
              </div>
              {/* 카카오지도 */}
              <div className="kakao-map">
                <KakaoMap address={modalContent.address} title={modalContent.title} />
              </div>
              <div className="btn-container">
                <PrimaryBtn title="수정" onClick={onPrepairing} />
                <PrimaryBtn title="삭제" onClick={onPrepairing} />
              </div>
            </div>
          </BestModal>
        )}
      </Layout>
    </StyledMainPage>
  );
};

export default MainPage;
