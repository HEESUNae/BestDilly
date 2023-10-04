import { FormEvent, useState } from 'react';
import { StyledWritePage } from './style';
import { IconImage } from '../../image';
import useAddress from '../../hooks/useAddress';

import Layout from '../../components/layouts/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import BasicInput from '../../components/input/BasicInput';
import BasicSelect from '../../components/select/BasicSelect';
import BasicTextarea from '../../components/textarea/BasicTextarea';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  const { address, handleClick } = useAddress();
  const [imageSrc, setImageSrc] = useState(null);
  const navigation = useNavigate();

  // 파일 이미지 미리보기
  const encodeFileToBase64 = async (fileBlob: File[]) => {
    console.log(fileBlob);
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob[0]);
    await fileUpload(reader);
  };
  const fileUpload = async (reader: any) => {
    reader.onload = () => setImageSrc(reader.result);
  };

  // 등록하기
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('현재 CRUD API가 없으므로 해당기능은 제공하지 않습니다.');
    navigation('/main');
  };

  return (
    <StyledWritePage>
      <Layout>
        <div className="write-container">
          <h2>맛집 등록</h2>
          <p>맛집 정보를 입력해주세요.</p>
          <form>
            <BasicInput label="가게" />
            <BasicSelect label="지역" />
            <BasicTextarea label="설명" />
            <BasicInput
              type="file"
              label="사진"
              onChange={(e) => {
                encodeFileToBase64(e.target.files);
              }}
            />
            <div className="file-viewer">{imageSrc && <img src={imageSrc} alt="파일이미지 미리보기" />}</div>
            <BasicInput label="주소" value={address} onClick={handleClick} />
            <div className="btn-container">
              <PrimaryBtn type="submit" title="등록하기" isIcon={IconImage.iconListAdd} onClick={onSubmit} />
            </div>
          </form>
        </div>
      </Layout>
    </StyledWritePage>
  );
};

export default WritePage;
