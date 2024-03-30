import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/제주도코스1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function JejuPlace1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "스누피 캐릭터 기반으로 만든 테마파크  ";

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
                        <h1>스누피 가든</h1>
                    </li>
                    <li>
                        <li>
                            <BiNotepad size={25} />
                        </li>
                        <li>
                            <p>{renderText()}</p>
                            {renderButton()}
                        </li>
                    </li>
                    <li>
                        <li>
                            <IoLocationOutline size={25} />
                        </li>
                        <li>
                            <p>제주 제주시 구좌읍 금백조로 930</p>
                        </li>
                    </li>
                    <li>
                        <li>
                            <BiTimeFive size={25} />
                        </li>
                        <li>
                            <p>매일하계 4월 - 9월09:00 - 19:00 동계 10월 -3월09:00 - 18:00</p>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default JejuPlace1;