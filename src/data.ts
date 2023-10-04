import { ImgImage } from './image';
import { LocalCheckProps } from './types';

// 카테고리 지역
export const locals: LocalCheckProps[] = [
  {
    id: 1,
    name: '전국',
    checked: true,
  },
  {
    id: 2,
    name: '서울',
    checked: false,
  },
  {
    id: 3,
    name: '인천',
    checked: false,
  },
  {
    id: 4,
    name: '경기',
    checked: false,
  },
  {
    id: 5,
    name: '부산',
    checked: false,
  },
  {
    id: 6,
    name: '대구',
    checked: false,
  },
  {
    id: 7,
    name: '광주',
    checked: false,
  },
  {
    id: 8,
    name: '대전',
    checked: false,
  },
  {
    id: 9,
    name: '울산',
    checked: false,
  },
  {
    id: 10,
    name: '세종',
    checked: false,
  },
  {
    id: 11,
    name: '강원',
    checked: false,
  },
  {
    id: 12,
    name: '경남',
    checked: false,
  },
  {
    id: 13,
    name: '경북',
    checked: false,
  },
  {
    id: 14,
    name: '전남',
    checked: false,
  },
  {
    id: 15,
    name: '전북',
    checked: false,
  },
  {
    id: 16,
    name: '충남',
    checked: false,
  },
  {
    id: 17,
    name: '충북',
    checked: false,
  },
  {
    id: 18,
    name: '제주',
    checked: false,
  },
];

// 베스트 가게 리스트
export const bestList = [
  {
    id: 1,
    image: ImgImage.imgRara,
    title: '라라코스트',
    desc: '잠심 롯데월드 안에 위치하고 있는 레스토랑',
    address: '서울시 송파구 올림픽로240',
    local: '서울',
    favorite: 5,
  },
  {
    id: 2,
    image: ImgImage.imgPrimitive,
    title: '원시인쪽갈비',
    desc: '부평구청역 근처에 위치하고 있는 쪽갈비 맛집',
    address: '인천시 부평구 길주남로23',
    local: '인천',
    favorite: 8,
  },
  {
    id: 3,
    image: ImgImage.imgBibi,
    title: '비비비당',
    desc: '부산 해운대 오션뷰 유명한 전통 찻집',
    address: '부산 해운대구 달맞이길 239-16',
    local: '부산',
    favorite: 1,
  },
  {
    id: 4,
    image: ImgImage.imgPorkCutlet,
    title: '대쿠이',
    desc: '가성비 좋은 프리미엄 돈까스 맛집',
    address: '대구시 남구 대명동 1807-25',
    local: '대구',
    favorite: 10,
  },
  {
    id: 5,
    image: ImgImage.imgNoddle,
    title: '올래국수',
    desc: '양이 푸짐한 맑은 국물의 고기국수',
    address: '제주 제주시 연동 301-19',
    local: '제주',
    favorite: 12,
  },

  {
    id: 6,
    image: ImgImage.imgMeat,
    title: '언양기와집불고기',
    desc: '고기를 석쇠 사이에 끼어 구워내는 3대 불고기',
    address: '울산시 울주군 언양읍 서부리 13',
    local: '울산',
    favorite: 1,
  },
  {
    id: 7,
    image: ImgImage.imgCrap,
    title: '속초붉은대게수산',
    desc: '속초중앙시장에서 유명한 대게 포장 전문점',
    address: '강원도 속초시 중앙동 472-5',
    local: '강원',
    favorite: 21,
  },
  {
    id: 8,
    image: ImgImage.imgRice,
    title: '꽃돌게장1번가',
    desc: '여수에서 유명한 꽃게장 전통 한식',
    address: '전라남도 여수시 봉산동 210-2',
    local: '전남',
    favorite: 5,
  },
  {
    id: 9,
    image: ImgImage.imgGukbab,
    title: '태평소국밥',
    desc: '부드러운 소머리 고기가 듬뿍 들어간 국밥',
    address: '대전시 유성구 봉명동 676-3',
    local: '대전',
    favorite: 7,
  },
  {
    id: 10,
    image: ImgImage.imgRoar,
    title: '우렁이박사',
    desc: '당진가면 꼭 먹어야할 우렁쌈밥',
    address: '충청남도 당진시 신평면 도성리 499-11',
    local: '충남',
    favorite: 19,
  },
];
