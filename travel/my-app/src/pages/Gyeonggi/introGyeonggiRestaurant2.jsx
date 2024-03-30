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

function IntroGyeonggifood2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230307_63%2F16781862722584rQaR_JPEG%2F5709E740-D72D-45FC-9355-21E43D38CD06.jpeg" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>뱀부포레스트</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    경기도 김포 대형 베이커리카페&레스토랑, 대나무 숲 피톤치드와 초록의 감성을 느낄 수 있는 힐링 공간
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    경기 김포시 하성면 금포로1915번길 7
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    평일 11:00-21:30<br/>
                    브레이크 타임 15:30-16:30
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1396-7025
                </p >
                <a href = "https://www.instagram.com/bamboo158_official/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/bamboo158_official/
                </a>
            </div>
        </div>
    );
}

export default IntroGyeonggifood2;