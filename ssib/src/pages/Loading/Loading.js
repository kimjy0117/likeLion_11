/*eslint-disable */ //warning안뜨게 해줌
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Loading.css";
import loadingImg_1 from "../../assets/loading/loadingImg_1.png";
import loadingImg_2 from "../../assets/loading/loadingImg_2.png";
import loadingImg_3 from "../../assets/loading/loadingImg_3.png";
import loadingImg_4 from "../../assets/loading/loadingImg_4.png";

const loading_images = [
  loadingImg_1,
  loadingImg_2,
  loadingImg_3,
  loadingImg_4,
];


function Loading() {
  const [images, setImages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // 주소창에서 값을 받아옴
  const searchParams = new URLSearchParams(location.search);
  const first = searchParams.get('first');
  const second = searchParams.get('second');

  //로딩 이미지를 0.5초에 한 번씩 바꿈
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImages((prevIndex) => (prevIndex + 1) % loading_images.length);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //3초 뒤 결과 페이지로 이동
  useEffect(() =>{
    const timeoutId = setTimeout(() => {
      //result페이지로 이동
      navigate(`/result?first=${first}&second=${second}`);
    }, 3000);
    return ()=>{
      clearTimeout(timeoutId);
    };
  }, [navigate]);
  
  return (
    <div className="Loading">
      <div className="center">
        <img
          src={loading_images[images]}
          alt={`Images ${images + 1}`}
          className="loading-images"
        />
      </div>
      <span className="cooking">음식 조리 중</span>
    </div>
  );
}

export default Loading;
