import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import TopImage from '../images/제주도카페1.jpg';
import BottomImage from '../images/제주도카페2.jpg';
import cos1 from '../images/제주도코스1.jpg';
import cos2 from '../images/제주도코스2.jpg';
import food1 from '../images/제주도맛집1.jpg';
import food2 from '../images/제주도맛집2.jpg';


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = ' KEY_ID';
let region = 'Jeju';

function JejuIntro () {
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
                        <Link to='/intro/Jeju/cafe1'>
                                <img src={TopImage} />
                                <p>해화탕 </p>
                        </Link>
                        
                        <Link to='/intro/Jeju/cafe2'>
                        <img src={BottomImage} />
                        <p>원앤온리</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Jeju/place1'>
                                <img src={cos1} />
                                <p>스누피 가든</p>
                        </Link>
                        
                         <Link to='/intro/Jeju/place2'> 
                                <img src={cos2} />
                                <p>넥슨컴퓨터박물관</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                        <h3>맛집</h3>
                        <Link to='/intro/Jeju/food1'>
                                <img src={food1} />
                                <p>고집돌우럭 중문점</p>
                        </Link>

                         <Link to='/intro/Jeju/food2'>
                                <img src={food2}/>
                                <p>제주광해 애월</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default JejuIntro;