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

function IntroGangwonPlace1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTRfNzgg%2FMDAxNjY1NzU3NzU3Njg1.H36q62Aohf0PIavHZl_fFcgvjRyeQL5c0cBRoljuyTYg.o0WluyJaY-4p3GWkg0FZ4N_qo8RAOLDOt0NX9DruyL8g.JPEG.wkwmd81%2F%25B4%25E7%25C0%25CF%25C4%25A1%25B1%25E2%25BF%25A9%25C7%25E0_%25C3%25E1%25C3%25B5%25B0%25A1%25BA%25BC%25B8%25B8%25C7%25D1%25B0%25F7_04.jpg&type=sc960_832" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>남이섬</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    북한강 한 가운데 있는 하중도. 또는 그 섬에 위치한 대한민국 대표 관광지. 한국관광공사 선정(2017~2018) '한국인이 꼭 가봐야 할 관광 100선' 중의 하나다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 춘천시 남산면 남이섬길 1
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 08:00-21:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1311-8114
                </p >
                <a href = "https://www.instagram.com/namiisland_naminara/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/namiisland_naminara/
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonPlace1;