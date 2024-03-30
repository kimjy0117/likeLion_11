import React from 'react';
import { AiOutlineFileSearch, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
const styles = {
    main: {
        display: "flex",
        textAlign: "left",
        width: 740,
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

function IntroChungPlace2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180625_63%2F15298942176195UicF_JPEG%2F%2528.jpg" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>단양다누리아쿠아리움</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    높이 8m에 달하는 대형수족관에 입이 떡 벌어지고! 국내외 다양한 민물고기를 만나볼 수 있어서 더욱 즐겁고! 아이들에게는 환상 가득한 배움의 시간을, 어른들에게는 순수한 동심으로 돌아가는 시간을 선사합니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충북 단양군 단양읍 수변로 111
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 09:00-18:00<br/>
                    월요일 휴무
                </p >
                <a href = "https://www.danyang.go.kr/aquarium" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.danyang.go.kr/aquarium
                </a>
            </div>
        </div>
    );
}

export default IntroChungPlace2;