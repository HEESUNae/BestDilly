import { IconImage, ImgImage } from '../../image';
import { StyledSplashPage } from './style';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigation = useNavigate();

  return (
    <StyledSplashPage>
      <img src={ImgImage.imgLoading} className="loading" alt="" />
      <div>
        <p>전국 맛집 공유 플랫폼</p>
        <p className="logo">BESTDILLY</p>
      </div>
      <p>
        해당페이지는 React, Typescript를 활용하여
        <br /> 개인 포트폴리오 용도로 만들어졌습니다.
      </p>
      <p>
        디자인 & 퍼블리싱 & 카카오지도, 주소검색 API 연동했으며,
        <br /> 현재 CRUD API가 없으므로 해당 기능은 작동하지 않습니다. <br />
      </p>
      <PrimaryBtn title="페이지 보러가기" isIcon={IconImage.iconArrowCircleRight} onClick={() => navigation('/main')} />
    </StyledSplashPage>
  );
};

export default SplashPage;
