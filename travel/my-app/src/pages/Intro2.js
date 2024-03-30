import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTemperatureHigh } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

import classes from './Intro2.module.css';
import jerry from '../images/제리.jpg'
import tom from '../images/톰.jpg'


//openweathermap에서 회원가입 후 메일로 오는 KEY_ID에 api key 넣으시면 됩니다.
// region에 원하는 지역 이름 영어로 넣으시면 됩니다.

let KEY_ID = 'api_key';
let region = 'Seoul';

function Intro2 () {
 
    return (
        <>

        <div className={classes.container}>
                
                <div className={classes.intro}>
                        <h3>카페</h3>
                        <Link to='/intro/Chungcheong/cafe1'>
                                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210225_286%2F1614182833083VFUzk_JPEG%2FtNj1ZVOuENGJDqUxNbp4wtOE.jpg" />
                                <p>로드1950카페 </p>
                        </Link>
                        
                        <Link to='/intro/Chungcheong/cafe2'>
                        <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MTBfNjMg%2FMDAxNjg4OTYxNzgxOTQ0.W9uD72IzEGgfgaPkUVhYdZZGkud5HMU10ZA4Z58nuagg.OPyL_1bOc1BEx6Bo7oIu8b7EHhEmiYM4B2msT_-X5QEg.JPEG%2F1FD63B13-4110-4050-AFE5-25AAF8E78A25.jpeg" />
                        <p>트리브링</p>
                        </Link>
                        
        
                </div>
                <div className={classes.intro}>

                        <img src={jerry} />
                        <p>카페 좋은 곳</p>
                        <img src={jerry} />
                        <p>카페 좋은 곳</p>
     
                </div>
                <div className={classes.intro}>

                        <img src={jerry} />
                        <p>카페 좋은 곳</p>
                        <img src={jerry} />
                        <p>카페 좋은 곳</p>
              
                </div>
           </div>
        </>
        
    );
}

export default Intro2;