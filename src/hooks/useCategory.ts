import { Dispatch, SetStateAction, useState } from 'react';
import { locals } from '../data';
import { BestListProps } from '../types';

export const useCategory = () => {
  const [categoryList, setCategoryList] = useState(locals);

  const onLocalCheck = (checkId: number, setLists: Dispatch<SetStateAction<BestListProps[]>>) => {
    // 지역선택 ("전국" 해제 후 선택한 지역 선택)
    categoryList.forEach((list) => {
      if (categoryList[0].checked) list.checked = false;
      if (list.id === checkId) list.checked = !list.checked;
    });

    // 전국선택 (지역 모두 선택시 "전국" 선택 || 지역 모두 해제시 "전국" 선택)
    const isTotalChack = categoryList.filter((v) => v.checked === true);
    if (!categoryList[0].checked) {
      if (isTotalChack.length === categoryList.length - 1 || isTotalChack.length === 0) {
        categoryList.forEach((list) => {
          list.checked = false;
        });
        categoryList[0].checked = true;
      }
    }

    // 체크박스 적용
    setCategoryList([...categoryList]);

    // 체크된 지역 맛집만 보여주기
    const localBestList = localStorage.getItem('bestList');
    if (localBestList) {
      const getLocalStorageBestList = JSON.parse(localBestList);
      const selectLocal = categoryList.filter((v) => v.checked === true).map((v) => v.name);
      const checkLocal = getLocalStorageBestList.filter((v: BestListProps) => selectLocal.includes(v.local));
      categoryList[0].checked ? setLists(getLocalStorageBestList) : setLists(checkLocal);
    }
  };

  return { categoryList, onLocalCheck };
};
