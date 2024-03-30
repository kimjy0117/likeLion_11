import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import TopImage from '../images/경상도카페1.jpg';
import BottomImage from '../images/경상도카페2.jpg';
import cos1 from '../images/경상도코스1.jpg';
import cos2 from '../images/경상도코스2.jpg';
import food1 from '../images/경상도맛집1.jpg';
import food2 from '../images/경상도맛집2.jpg';


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = 'KEY_ID';
let region = 'Busan';

function GyeongsangIntro () {
 
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
                        <Link to='/intro/Gyeongsang/cafe1'>
                                <img src={TopImage} />
                                <p>네르하21카페 </p>
                        </Link>
                        
                        <Link to='/intro/Gyeongsang/cafe2'>
                        <img src={BottomImage} />
                        <p>뚜벅스 광안점</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Gyeongsang/place1'>
                                <img src={cos1} />
                                <p>롯데월드 부산</p>
                        </Link>
                        
                         <Link to='/intro/Gyeongsang/place2'> 
                                <img src={cos2} />
                                <p>통용욕지섬 모노레일</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                <h3>맛집</h3>
                        <Link to='/intro/Gyeongsang/food1'>
                                <img src={food1} />
                                <p>동피랑쭈굴</p>
                        </Link>

                         <Link to='/intro/Gyeongsang/food2'>
                                <img src={food2}/>
                                <p>해목</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default  GyeongsangIntro;