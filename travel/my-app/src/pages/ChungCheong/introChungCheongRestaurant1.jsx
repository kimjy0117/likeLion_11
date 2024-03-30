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

function IntroChungFood1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230602_131%2F1685699170019xHmA9_JPEG%2F20230322_114937.jpg" width="400" height="380"/>
            <div style = {styles.text}>
                <h1 style = {styles.title}>쭈낙해물칼국수</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    대체로 깔끔하고 아늑한 분위기를 자랑하는 맛집이며, 가볍게 먹을 수 있는 점심 혹은 친구들과 함께 즐기기 좋은 저녁 식사로 추천합니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충북 청주시 흥덕구 덕암로41번길 83 쭈낙해물칼국수 청주본점
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:00-21:00<br/>
                    화요일 휴무
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1342-9494
                </p >
                <a href = "https://naver.me/F6mxXNXD" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://naver.me/F6mxXNXD
                </a>
            </div>
        </div>
    );
}

export default IntroChungFood1;