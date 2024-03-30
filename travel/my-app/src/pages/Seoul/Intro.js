import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import SeoulCafeTopImage from '../images/서울카페1.jpg';
import SeoulCafeBottomImage from '../images/서울카페2.png';
import Seoulcos1 from '../images/서울코스1.jpg';
import Seoulcos2 from '../images/서울코스2.jpg';
import Seoulfood1 from '../images/서울맛집1.png';
import Seoulfood2 from '../images/서울맛집2.jpg';


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = 'KEY_ID';
let region = 'Seoul';

function SeoulIntro () {
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
                        <Link to='/intro/Seoul/cafe1'>
                                <img src={SeoulCafeTopImage} />
                                <p>런던 베이글 뮤지엄 안국점 </p>
                        </Link>
                        
                        <Link to='/intro/Seoul/cafe2'>
                        <img src={SeoulCafeBottomImage} />
                        <p>노티드 성수</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Seoul/place1'>
                                <img src={Seoulcos1} />
                                <p>창덕궁 달빛기행</p>
                        </Link>
                        
                         <Link to='/intro/Seoul/place2'> 
                                <img src={Seoulcos2} />
                                <p>마우리치오 카텔란: WE</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                        <h3>맛집</h3>
                        <Link to='/intro/Seoul/food1'>
                                <img src={Seoulfood1} />
                                <p>호우섬 더현대서울점</p>
                        </Link>

                         <Link to='/intro/Seoul/food2'>
                                <img src={Seoulfood2}/>
                                <p>연남토마 연남본점</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default SeoulIntro;