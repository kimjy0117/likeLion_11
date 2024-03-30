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

function IntroGyeonggifood1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180823_282%2F1535026994533jXyt4_JPEG%2Fav3qN7LitKGTtS3XeRI4WxPA.jpg" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>고기리 막국수</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    너무나 유명해서 더 설명할 필요가 없는 막국수 맛집
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    경기 용인시 수지구 이종무로 157
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    평일 11:00-21:00<br/>
                    주말 10:40-21:00<br/>
                    화요일 휴무
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1334-1107
                </p >
                <a href = "https://www.instagram.com/gogiri.gram/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/gogiri.gram/
                </a>
            </div>
        </div>
    );
}

export default IntroGyeonggifood1;