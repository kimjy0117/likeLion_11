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

function IntroGangwonCafe1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190719_37%2F1563524078828qIkz3_JPEG%2FDHngFYRQwF4ELG3mbCBOGT5L.jpg" width="450" height="400"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>감자밭</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    우리가 살아가는 모든 삶은 우리 경험의 응집체, 축적 그 자체임을 나타내는 감자와 같습니다. 
                    우리는 당신의 밭에서 일궈낸 다양한 감자를 존중하고, 그 다양성의 가치를 담은 콘텐츠를 경험할 수 있도록 제안합니다.
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    강원 춘천시 신북읍 신샘밭로 674
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    매일 10:00-20:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    1566-3756
                </p >
                <a href = "https://www.instagram.com/gamzabatt/" target="none" style = {styles.p}>
                    <div><FaLocationArrow size="20"/></div>
                    https://www.instagram.com/gamzabatt/
                </a>
            </div>
        </div>
    );
}

export default IntroGangwonCafe1;