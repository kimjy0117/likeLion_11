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

function IntroChungCafe2(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MTBfNjMg%2FMDAxNjg4OTYxNzgxOTQ0.W9uD72IzEGgfgaPkUVhYdZZGkud5HMU10ZA4Z58nuagg.OPyL_1bOc1BEx6Bo7oIu8b7EHhEmiYM4B2msT_-X5QEg.JPEG%2F1FD63B13-4110-4050-AFE5-25AAF8E78A25.jpeg" width="450" height="400"/>
            <div style = {styles.text}>
                <h1 style = {styles.title}>트리브링</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    매일 직접 베이킹하는 40여가지 제품과 샐러드가 준비되어 있으며, 도심속에서 즐기는 숲속 힐링공간
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    충북 청주시 서원구 남이면 청남로 1388-36
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:00-22:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1444-7566
                </p >
                <a href = "https://www.instagram.com/cafe_treebring" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/cafe_treebring
                </a>
            </div>
        </div>
    );
}

export default IntroChungCafe2;