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

function IntroGyeonggiCafe2(){
    return(
        <div style = {styles.main}>
            <img src="https://blog.kakaocdn.net/dn/32S9X/btq6HkxGCTf/PVpjyi1sTMtdGA7KPFkO8K/img.png" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>포레스트아웃팅스</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    대형 식물원을 연상케 하는, 식물원 그 자체인 대형 베이커리&브런치 카페
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    경기 고양시 일산동구 고양대로 1124
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:00-22:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    031-963-0500
                </p >
                <a href = "https://www.instagram.com/forestoutings_ilsan/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/forestoutings_ilsan/
                </a>
            </div>
        </div>
    );
}

export default IntroGyeonggiCafe2;