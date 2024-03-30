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

function IntroGangwonCafe2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MThfMjQ1%2FMDAxNjgxNzk3MDM3Mzc4.ncoAOLr-oAk0yj9xLWedpzXrpWDDc3VcLQbum7YarGsg.btbH2AJvHOejor_l2kR1qPeOyfqas2pJqZ0O8ORw4tog.JPEG.jar29%2FIMG_2707.jpg&type=sc960_832" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>카페 툇마루</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    흑임자가 들어간 툇마루커피로 유명한 곳
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 강릉시 난설헌로 232 카페 툇마루
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 11:00-19:00<br/>
                    화요일 휴무
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    1566-3756
                </p >
                <a href = "https://www.instagram.com/cafe_toenmaru/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/cafe_toenmaru/
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonCafe2;