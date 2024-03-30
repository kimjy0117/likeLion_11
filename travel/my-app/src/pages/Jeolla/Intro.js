import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import TopImage from '../images/전라도카페1.jpg';
import BottomImage from '../images/전라도카페2.jpg'
import cos1 from '../images/전라도코스1.jpg';
import cos2 from '../images/전라도코스2.jpg';
import food1 from '../images/전라도맛집1.jpg';
import food2 from '../images/전라도맛집2.jpg';


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = 'KEY_ID';
let region = 'Gwangju';

function JeollaIntro () {
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
                        <Link to='/intro/Jeolla/cafe1'>
                                <img src={TopImage} />
                                <p>전남 여수시 돌산읍 마상포길 12 luxcavana </p>
                        </Link>
                        
                        <Link to='/intro/Jeolla/cafe2'>
                        <img src={BottomImage} />
                        <p>그랑게</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Jeolla/place1'>
                                <img src={cos1} />
                                <p>여수 오동도 동백꽃 전망대</p>
                        </Link>
                        
                         <Link to='/intro/Jeolla/place2'> 
                                <img src={cos2} />
                                <p>임실치즈테마파크</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                <h3>맛집</h3>
                        <Link to='/intro/Jeolla/food1'>
                                <img src={food1} />
                                <p>정희 여수점</p>
                        </Link>

                         <Link to='/intro/Jeolla/food2'>
                                <img src={food2}/>
                                <p>시골집</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default JeollaIntro;