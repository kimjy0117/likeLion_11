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

function IntroChungFood2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230410_212%2F16810941715000YhFQ_JPEG%2FIMG_5112.JPG" width="400" height="380"/>
            <div style = {styles.text}>
                <h1 style = {styles.title}>딴뚝통나무집식당</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    각종 언론(이국주 나혼자산다 등 다수)에 소개된 태안의 최고 맛집 꽃게 전문점입니다
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충남 태안군 안면읍 조운막터길 23-22
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    평일 09:30-20:30<br/>
                    주말 08:40-20:30
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    041-673-1645
                </p >
                <a href = "http://www.ttanttuk.co.kr/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    http://www.ttanttuk.co.kr/
                </a>
            </div>
        </div>
    );
}

export default IntroChungFood2;