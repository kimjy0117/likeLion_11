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
let region = 'Chuncheon';

function GwIntro () {
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
                        <Link to='/intro/Gangwon/cafe1'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190719_37%2F1563524078828qIkz3_JPEG%2FDHngFYRQwF4ELG3mbCBOGT5L.jpg" />
                                <p>감자밭</p>
                        </Link>
                        
                        <Link to='/intro/Gangwon/cafe2'>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MThfMjQ1%2FMDAxNjgxNzk3MDM3Mzc4.ncoAOLr-oAk0yj9xLWedpzXrpWDDc3VcLQbum7YarGsg.btbH2AJvHOejor_l2kR1qPeOyfqas2pJqZ0O8ORw4tog.JPEG.jar29%2FIMG_2707.jpg&type=sc960_832" />
                        <p>카페 툇마루</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>
                        <h3>코스</h3>
                        <Link to='/intro/Gangwon/place1'>
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTRfNzgg%2FMDAxNjY1NzU3NzU3Njg1.H36q62Aohf0PIavHZl_fFcgvjRyeQL5c0cBRoljuyTYg.o0WluyJaY-4p3GWkg0FZ4N_qo8RAOLDOt0NX9DruyL8g.JPEG.wkwmd81%2F%25B4%25E7%25C0%25CF%25C4%25A1%25B1%25E2%25BF%25A9%25C7%25E0_%25C3%25E1%25C3%25B5%25B0%25A1%25BA%25BC%25B8%25B8%25C7%25D1%25B0%25F7_04.jpg&type=sc960_832" />
                                <p>남이섬</p>
                        </Link>
                        
                         <Link to='/intro/Gangwon/place2'> 
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTRfMTIy%2FMDAxNjYwNDQ2MzE0OTcw.t16_4Wh1zWPpW_ENtbeqR9hLhb570skf9mjyJNrsopQg.O9Ihwou3VUOOfj-3OlQH-Hos-MSNoZifQekPP0xyHNcg.JPEG.cyebes7620%2F20220812%25A3%25DF162335.jpg&type=sc960_832" />
                                <p>아르떼 뮤지엄</p>
                        </Link>
                </div>
                <div className={classes.intro}>
                        <h3>맛집</h3>
                        <Link to='/intro/Gangwon/food1'>
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTBfMTQx%2FMDAxNjQ0NDU3MTQzMzM2.6FDFkI4B953Yz-n3Bfmjjfh4nyBZo6nRrFzZ2pP0XPwg.WhzLSUB6x7xh2CKDpbDr1iGOyBQAN8MevNf_k9Es41og.JPEG.ywqbwrydo52%2FKakaoTalk_20220124_082329881_03.jpg&type=sc960_832" />
                                <p>강릉짬뽕순두부 동화가든</p>
                        </Link>

                         <Link to='/intro/Gangwon/food2'>
                                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDNfNTcg%2FMDAxNjg4Mzg5OTI5MTU1.lL5wXYEqigBIlMt012Mp_tXFXzsAuHrOits8Hxta9-kg.wj-qHuoU0nHNfml-uLUqAyJ_fVKt9qWiJMObB5PEZFEg.JPEG.jina4021%2F14.jpg&type=sc960_832" />
                                <p>춘천통나무집닭갈비</p>
                        </Link> 
              
                </div>
           </div>
        </>
        
    );
}

export default GwIntro;