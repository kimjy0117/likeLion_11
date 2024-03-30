/*eslint-disable */ //warning안뜨게 해줌
import { Link, useLocation } from "react-router-dom";
import "./Result.css";
import axios from "axios";
import React, { useState, useEffect } from "react";


let getResult = "https://easymiracle.pythonanywhere.com/menus/foods";

function Result() {
  const [firstPosts, setFirstPosts] = useState([]);
  const [secondPosts, setSecondPosts] = useState([]);
  const location = useLocation();

  // 주소창에서 값을 받아옴
  const searchParams = new URLSearchParams(location.search);
  const first = searchParams.get('first');
  const second = searchParams.get('second');

  useEffect(() => {
    axios
      .all([
        axios.get(getResult, { params: { id: first}}),
        axios.get(getResult, { params: { id: second}})
      ])
      .then(
        axios.spread((res1, res2) => {
          // alert("수신에 성공");
          console.log(res1.data);
          console.log(res2.data);
          setFirstPosts(res1.data);
          setSecondPosts(res2.data);
        })
      )
      .catch((error) => {
        alert("수신에 실패");
        console.error(error);
      });
  }, []);

  

  return (
    <div className="Result">
      <div>
        <h1>오늘의 음식 완성</h1>
      </div>

      {/* 상단 메뉴 box */}
      <div className="mainMenu">
        <div className="resultFoodBox">
          <img src={"https://easymiracle.pythonanywhere.com"+firstPosts.food_image} className="resultFood" />
        </div>
        <div className="foodNameBox">
          <span className="foodName">{firstPosts.name}</span>
        </div>
      </div>

      {/* 하단 메뉴 box */}
      <div className="menu">
        {/* 하단 왼쪽 메뉴 box */}
        <div className="sideMenu">
          <h2>&lt;찰떡궁합&gt;</h2>
            <div className="sideFoodBox">
              <span className="menuName1">{firstPosts.matching_image}</span>
             </div>
          
        </div>

        {/* 하단 오른쪽 메뉴 box */}
        <div className="similarMenu">
          <h2>&lt;추천 2&gt;</h2>
            <div className="sideFoodBox">
              <img src={"https://easymiracle.pythonanywhere.com"+secondPosts.food_image} className="sideMenuImg" />
            </div>
          <span className="menuName2">{secondPosts.name}</span>
        </div>
      </div>

      {/* landing페이지로 연결됨 */}
      <div className="reTest">
        <Link to="/" className="linkStyle">
          <h3>테스트 다시하기</h3>
        </Link>
      </div>
    </div>
  );
}

export default Result;

