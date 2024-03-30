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

function IntroGangwonfood2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDNfNTcg%2FMDAxNjg4Mzg5OTI5MTU1.lL5wXYEqigBIlMt012Mp_tXFXzsAuHrOits8Hxta9-kg.wj-qHuoU0nHNfml-uLUqAyJ_fVKt9qWiJMObB5PEZFEg.JPEG.jina4021%2F14.jpg&type=sc960_832" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>춘천통나무집닭갈비</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    백종원의 3대천왕에서도 인정한 통나무집닭갈비
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 춘천시 신북읍 신샘밭로 763
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:30-21:30
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    033-241-5999
                </p >
                <a href = "http://www.chdakgalbi.com/main/main.html" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    http://www.chdakgalbi.com/main/main.html
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonfood2;