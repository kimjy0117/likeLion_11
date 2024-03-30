import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/경상도카페2.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function GyeongsangCafe2() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "광안리 오션뷰를 높은 곳에서 한눈에 바라볼 수 있는 넓고 탁트인 까페!";

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const renderText = () => {
        if (expanded) {
            return text;
        } else {
            if (text.length > 170) {
                return text.substring(0, 170) + "...";
            } else {
                return text;
            }
        }
    };
    

    const renderButton = () => {
        if (text.length > 170) {
            if (expanded) {
                return (
                    <span className="toggle-text" onClick={toggleExpanded}>
                        접기
                    </span>
                );
            } else {
                return (
                    <span className="toggle-text" onClick={toggleExpanded}>
                        더보기
                    </span>
                );
            }
        }
        return null;
    };

    return (
        <div className="detail-page">
            <div className="image-container"
                style={{
                    backgroundImage: `url(${Detailimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '400px',
                    height: '400px',
                }}>
            </div>
            <div className="text-container">
                <ul className="item">
                    <li>
                        <h1>뚜벅스 광안점</h1>
                    </li>
                    <li>
                        <li>
                            <BiNotepad size={25} />
                        </li>
                        <li>
                            <p>{renderText()}{renderButton()}</p>
                        </li>
                    </li>
                    <li>
                    <li>
                        <IoLocationOutline size={25} />
                    </li>
                    <li>
                        <p>부산 수영구 광안해변로 239 7층</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:00 ~ 23:30</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} /></li>
                    <li>
                        <p><a href="http://ccroom.co.kr/">http://ccroom.co.kr/</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GyeongsangCafe2;