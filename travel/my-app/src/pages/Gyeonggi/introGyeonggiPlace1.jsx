import React from 'react';
import { AiOutlineFileSearch, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa";
const styles = {
    main: {
        display: "flex",
        textAlign: "left",
        width: 600,
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

function IntroGyeonggiPlace1(){
    return(
        <div style = {styles.main}>
            <img src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/625/64a5c572e14bcd9ad43001a07bc2d063.jpeg" width="450" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>화담숲</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    경기도 광주에 위치한 생태수목원이다. 
                    화담숲의 화담은 ‘정답게 이야기를 나누다’는 의미로, 화담숲은 인간과 자연이 교감할 수 있는 생태 공간을 지향한다. 
                    자연의 지형과 식생을 최대한 보존하여 조성된 덕분에, 
                    노고봉의 계곡과 능선을 따라 자연스럽게 자리 잡은 수목들의 다양한 모습을 볼 수 있다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    경기 광주시 도척면 도척윗로 278-1
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 09:00 - 18:00<br/>
                    월요일 정기휴무
                </p >
                <a href = "https://www.instagram.com/hwadamsup/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/hwadamsup/
                </a>
            </div>
        </div>
    );
}

export default IntroGyeonggiPlace1;