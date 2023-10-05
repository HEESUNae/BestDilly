import { useState } from 'react';
import { StyledWritePage } from './style';
import { IconImage } from '../../image';
import useAddress from '../../hooks/useAddress';

import Layout from '../../components/layouts/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import BasicInput from '../../components/input/BasicInput';
import BasicSelect from '../../components/select/BasicSelect';
import BasicTextarea from '../../components/textarea/BasicTextarea';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BestListProps } from '../../types';

const WritePage = () => {
  const { address, handleClick } = useAddress();
  const [imageSrc, setImageSrc] = useState(null);
  const navigation = useNavigate();

  // 파일 이미지 미리보기
  const encodeFileToBase64 = async (fileBlob: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    await fileUpload(reader);
  };
  const fileUpload = async (reader: any) => {
    reader.onload = () => setImageSrc(reader.result);
  };

  // 등록하기
  type Inputs = {
    image: FileList;
    title: string;
    desc: string;
    address: string;
    local: string;
  };
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const localBestList = localStorage.getItem('bestList');
    if (localBestList) {
      // 로컬스토리지 값 배열로 변환
      const getLocalStorageBestList = JSON.parse(localBestList);
      let nextId = 0;
      getLocalStorageBestList.forEach((list: BestListProps) => {
        if (nextId < list.id) nextId = list.id;
      });
      // 이미지 파일 로컬스토리지에 저장
      const reader = new FileReader();
      reader.onload = function (e: any) {
        const newListStr = JSON.stringify([
          ...getLocalStorageBestList,
          { ...data, image: e.target.result, favorite: 0, id: nextId + 1 },
        ]);
        localStorage.setItem('bestList', newListStr);
        navigation('/main');
      };
      reader.readAsDataURL(data['image'][0]);
    }
  };

  return (
    <StyledWritePage>
      <Layout>
        <div className="write-container">
          <h2>맛집 등록</h2>
          <p>맛집 정보를 입력해주세요.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BasicInput label="가게" formValue={{ ...register('title', { required: true }) }} />
            <BasicSelect label="지역" formValue={{ ...register('local', { required: true }) }} />
            <BasicTextarea label="설명" formValue={{ ...register('desc', { required: true }) }} />
            <BasicInput
              type="file"
              label="사진"
              formValue={{
                ...register('image', {
                  required: true,
                  onChange: (e) => {
                    encodeFileToBase64(e.target.files[0]);
                  },
                }),
              }}
            />
            <div className="file-viewer">{imageSrc && <img src={imageSrc} alt="파일이미지 미리보기" />}</div>
            <BasicInput
              label="주소"
              value={address}
              onClick={handleClick}
              formValue={{ ...register('address', { required: true }) }}
            />
            <div className="btn-container">
              <PrimaryBtn type="submit" title="등록하기" isIcon={IconImage.iconListAdd} />
            </div>
          </form>
        </div>
      </Layout>
    </StyledWritePage>
  );
};

export default WritePage;
