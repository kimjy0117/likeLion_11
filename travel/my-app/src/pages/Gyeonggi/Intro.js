import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import jerry from '../../images/제리.jpg'
import tom from '../../images/톰.jpg'


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = 'KEY_ID';
let region = 'Paju';

function GgIntro () {
        const [temp, settemp] = useState(); 
        const [iconid, seticonid] = useState();
        async function weather () {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${KEY_ID}`
                let response = await fetch(url);
                let data = await response.json()
                console.log(data);
                settemp(data.main.temp- 273.15);
                seticonid(data.weather[0].icon);
                
        }

       useEffect(()=>{
        weather();
        
       },[])
    return (
        <>
         <div className={classes.weather}>
                <p>오늘의 날씨 <WiCloud size={40} className={classes.cloud}/> </p>
                <p> <FaTemperatureHigh />  {Number(temp).toFixed(1)}</p>
                <p> <img src = {`https://openweathermap.org/img/wn/${iconid}.png`} /></p>
                </div>
        <div className={classes.container}>
                
                <div className={classes.intro}>
                        <h3>카페</h3>
                        <Link to='/intro/Gyeonggi/cafe1'>
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMThfMjIx%2FMDAxNjc5MTM1MzMxMTY4.3Ah6Q5GgUQkXmCxpl2_uT5UlMgfDqSfFXKFAFzO9MV8g.VXxQ0l3xeDjA8u_gTdXBCxh93DPLPwCN9LV12M9iPgwg.JPEG.dnjswltjs123%2F20230318%25A3%25DF190931.jpg&type=sc960_832" />
                                <p>조양방직 </p>
                        </Link>
                        
                        <Link to='/intro/Gyeonggi/cafe2'>
                        <img src="https://blog.kakaocdn.net/dn/32S9X/btq6HkxGCTf/PVpjyi1sTMtdGA7KPFkO8K/img.png" />
                        <p>포레스트아웃팅스</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Gyeonggi/place1'>
                                <img src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/625/64a5c572e14bcd9ad43001a07bc2d063.jpeg" />
                                <p>화담숲</p>
                        </Link>
                        
                         <Link to='/intro/Gyeonggi/place2'> 
                                <img src="https://cdn.imweb.me/upload/S201712205a3a0910b89f5/f077cee83b7d6.jpg" />
                                <p>화성행궁</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                        <h3>맛집</h3>
                        <Link to='/intro/Gyeonggifood1'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180823_282%2F1535026994533jXyt4_JPEG%2Fav3qN7LitKGTtS3XeRI4WxPA.jpg" />
                                <p>고기리 막국수</p>
                        </Link>

                         <Link to='/intro/Gyeonggi/food2'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230307_63%2F16781862722584rQaR_JPEG%2F5709E740-D72D-45FC-9355-21E43D38CD06.jpeg" />
                                <p>뱀부포레스트</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default GgIntro;