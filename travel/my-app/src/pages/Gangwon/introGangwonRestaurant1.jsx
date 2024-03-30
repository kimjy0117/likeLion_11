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

function IntroGangwonfood1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTBfMTQx%2FMDAxNjQ0NDU3MTQzMzM2.6FDFkI4B953Yz-n3Bfmjjfh4nyBZo6nRrFzZ2pP0XPwg.WhzLSUB6x7xh2CKDpbDr1iGOyBQAN8MevNf_k9Es41og.JPEG.ywqbwrydo52%2FKakaoTalk_20220124_082329881_03.jpg&type=sc960_832" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>강릉짬뽕순두부 동화가든</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    초당순두부마을에 위치한 맛집입니다. 국내에서 '짬뽕 순두부' 메뉴를 최초로 개발한 곳으로, 평일 오전에도 길게 줄이 이어질 만큼 인기가 높습니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 강릉시 초당순두부길77번길 15
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 07:00-19:00<br/>
                    수요일 휴무
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1432-9885
                </p >
                <a href = "https://www.instagram.com/donghwagarden/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/donghwagarden/
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonfood1;