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
let region = 'Daejeon';
function CcIntro () {
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
                        <Link to='/intro/Chungcheong/cafe1'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210225_286%2F1614182833083VFUzk_JPEG%2FtNj1ZVOuENGJDqUxNbp4wtOE.jpg" />
                                <p>로드1950카페 </p>
                        </Link>
                        
                        <Link to='/intro/Chungcheong/cafe2'>
                        <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MTBfNjMg%2FMDAxNjg4OTYxNzgxOTQ0.W9uD72IzEGgfgaPkUVhYdZZGkud5HMU10ZA4Z58nuagg.OPyL_1bOc1BEx6Bo7oIu8b7EHhEmiYM4B2msT_-X5QEg.JPEG%2F1FD63B13-4110-4050-AFE5-25AAF8E78A25.jpeg" />
                        <p>트리브링</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Chungcheong/place1'>
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDRfMjk1%2FMDAxNjU5NjA1NzY0MTAy.pq0aT4bBimOPse7oy2UpwFtGqfPA0EmDL4jIINI3t1kg.bQ2AFxcHvw_dOM4g1iA50X4TXJZjtw3BkeGLqh7L_L0g.JPEG.dbal0769%2F21B4D273-6E34-4091-99C4-AE3BC8445B6D.jpeg&type=sc960_832" />
                                <p>꽃지해수욕장</p>
                        </Link>
                        
                         <Link to='/intro/Chungcheong/place2'> 
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180625_63%2F15298942176195UicF_JPEG%2F%2528.jpg" />
                                <p>단양다누리아쿠아리움</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                        <h3>맛집</h3>
                        <Link to='/intro/Chungcheong/food1'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230602_131%2F1685699170019xHmA9_JPEG%2F20230322_114937.jpg" />
                                <p>쭈낙해물칼국수</p>
                        </Link>

                         <Link to='/intro/Chungcheong/food2'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230410_212%2F16810941715000YhFQ_JPEG%2FIMG_5112.JPG" />
                                <p>딴뚝통나무집식당</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default CcIntro;