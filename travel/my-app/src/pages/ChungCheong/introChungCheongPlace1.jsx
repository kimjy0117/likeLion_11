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

function IntroChungPlace1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDRfMjk1%2FMDAxNjU5NjA1NzY0MTAy.pq0aT4bBimOPse7oy2UpwFtGqfPA0EmDL4jIINI3t1kg.bQ2AFxcHvw_dOM4g1iA50X4TXJZjtw3BkeGLqh7L_L0g.JPEG.dbal0769%2F21B4D273-6E34-4091-99C4-AE3BC8445B6D.jpeg&type=sc960_832" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>꽃지해수욕장</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    백사장 면적은 96ha, 길이는 3.2㎞, 폭은 300m, 경사는 3도, 안정수면거리는 300m로, 승언리에서 서남쪽으로 약 4km쯤 떨어져 있는, 안면도에서 제일 큰 해수욕장이다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충남 태안군 안면읍 승언리
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 24시간
                </p >
                <a href = "https://naver.me/GnGCsZJ2" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://naver.me/GnGCsZJ2
                </a>
            </div>
        </div>
    );
}

export default IntroChungPlace1;