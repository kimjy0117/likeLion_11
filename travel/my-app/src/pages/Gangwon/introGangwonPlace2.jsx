import React from 'react';
import { AiOutlineFileSearch, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
const styles = {
    main: {
        display: "flex",
        textAlign: "left",
        width: 700,
        height: 500,
        margin: "auto",
        padding: "10%",
        fontWeight: "bold",
    },
    title:{
        textAlign: "center",
    },
    text:{
        width: 560,
        height: 500,
        marginLeft: 20,
    },
    p:{
        display: "flex",
    }
}

function IntroGangwonPlace2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTRfMTIy%2FMDAxNjYwNDQ2MzE0OTcw.t16_4Wh1zWPpW_ENtbeqR9hLhb570skf9mjyJNrsopQg.O9Ihwou3VUOOfj-3OlQH-Hos-MSNoZifQekPP0xyHNcg.JPEG.cyebes7620%2F20220812%25A3%25DF162335.jpg&type=sc960_832" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>아르떼 뮤지엄</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    아르떼뮤지엄 강릉은 디스트릭트가 2021년 12월 강릉 경포호 인근에서 선보이는 세 번째 몰입형 미디어아트 상설 전시관입니다. 
                    관동팔경의 으뜸인 강릉에서는 밸리(VALLEY)라는 테마로 백두대간의 중추인 강원도와 강릉의 지역적 특성을 반영한 12개의 다채로운 미디어아트 전시가 1,500평의 공간에서 펼쳐집니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 강릉시 난설헌로 131
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:00-20:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    1899-5008
                </p >
                <a href = "https://artemuseum.com/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://artemuseum.com/
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonPlace2;