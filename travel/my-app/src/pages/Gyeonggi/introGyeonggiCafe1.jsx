import React from 'react';
import { AiOutlineFileSearch, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
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

function IntroGyeonggiCafe1(){
    return(
        <div style = {styles.main}>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMThfMjIx%2FMDAxNjc5MTM1MzMxMTY4.3Ah6Q5GgUQkXmCxpl2_uT5UlMgfDqSfFXKFAFzO9MV8g.VXxQ0l3xeDjA8u_gTdXBCxh93DPLPwCN9LV12M9iPgwg.JPEG.dnjswltjs123%2F20230318%25A3%25DF190931.jpg&type=sc960_832" width="400" height="380"/>
            
            <div style = {styles.text}>
                <h1 style = {styles.title}>조양방직</h1>
                <p style = {styles.p}>
                    <div><AiOutlineFileSearch size="20"/></div>
                    방직공장을 리모델링해서 만든 강화도 레트로 감성 카페
                </p>
                <p style = {styles.p}>
                    <div><GrLocation size="20"/></div>
                    인천 강화군 강화읍 향나무길5번길 12 조양방직
                </p>
                <p style = {styles.p}>
                    <div><AiOutlineClockCircle size="20"/></div>
                    평일 11:00-20:00<br/>
                    주말 11:00-21:00
                </p >
                <p style = {styles.p}>
                    <div><BsTelephone size="20"/></div>
                    0507-1307-2192
                </p >
            </div>
        </div>
    );
}

export default IntroGyeonggiCafe1;