import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/경상도맛집1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive } from "react-icons/bi";

function GyeongsangRestaurant1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "통영 방문시 꼭 들려야 하는 필수코스 통영 대표 굴요리 맛집 동피랑 쭈굴 바다가 주는 선물 신선한 굴을 이용한 굴 요리를 맛보시기 바랍니다!";

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
                        <h1>동피랑쭈굴</h1>
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
                        <p>경남 통영시 통영해안로 363-1</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:30 ~ 20:30</p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GyeongsangRestaurant1;