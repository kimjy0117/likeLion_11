import React from 'react';
import { AiOutlineFileSearch, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
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

function IntroGyeonggiPlace2(){
    return(
        <div style = {styles.main}>
            <img src="https://cdn.imweb.me/upload/S201712205a3a0910b89f5/f077cee83b7d6.jpg" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>화성행궁</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    정조의 원대한 꿈과 효심이 느껴지는 화성행궁은 전국에 조성한 행궁가운데 가장 돋보이는 규모와 격식을 갖추었으며 경복궁만큼 아름다운 궁궐로 손꼽힙니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    경기 수원시 팔달구 정조로 825

                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 09:00 - 18:00<br/>
                    입장마감 17:30
                </p >
                <a href = "https://www.swcf.or.kr/?p=62" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.swcf.or.kr/?p=62
                </a>
            </div>
        </div>
    );
}

export default IntroGyeonggiPlace2;