import { useEffect } from 'react';

// kakao 타입지정
declare global {
  interface Window {
    kakao: any;
  }
}
interface KakaoMapProps {
  address: string;
  title: string;
}

const { kakao } = window;

const KakaoMap = ({ address, title }: KakaoMapProps) => {
  useEffect(() => {
    kakao.maps.load(() => {
      let container = document.querySelector('.kakao-map');

      const options = {
        center: new kakao.maps.LatLng(37.17058840207, 127.112843761156),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);
      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(address, function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${title}</div>`,
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    });
  }, []);

  return <div id="map" style={{ width: '300px', height: '200px' }}></div>;
};

export default KakaoMap;
