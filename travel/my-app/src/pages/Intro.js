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

function Intro(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210225_286%2F1614182833083VFUzk_JPEG%2FtNj1ZVOuENGJDqUxNbp4wtOE.jpg" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>로드1950카페</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    미국 느낌이 물씬 풍기는 초대형 오션뷰 카페
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충남 당진시 신평면 매산로 170
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    평일 10:30-21:00<br/>
                    주말 10:30-21:30
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    041-363-1950
                </p >
                <a href = "http://instagram.com/road_1950_official" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    http://instagram.com/road_1950_official
                </a>
            </div>
        </div>
    );
}

export default Intro;