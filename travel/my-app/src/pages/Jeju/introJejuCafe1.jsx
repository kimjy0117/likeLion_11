import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/제주도카페1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function JejuCafe1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "제주의 자연을 [목욕탕]이라는 독특한 컨셉으로 표현한 카페입니다. 마치 구름위를 걷는 기분을 느끼게 해주는 안개는 매시간 정시에 드리워지니 몽환적이고 환상적인 구름 속에서 그림같은 사진을 남겨보세요. 제주 여행중 가장 아름다운 사진이 될꺼에요. 또한 해화탕의 메인테마인 [음탕音湯]은 물의 흐름이 흙으로 빚은 그릇을 서로 부딪히게해내는 아름다운 소리로 우주의 시공간을 표현한 해화탕의 메인 오브제 입니다. 제주 최고의 유니크한 카페 [해화탕]을 경험해 보세요! #해화탕";

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
                        <h1>해화탕</h1>
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
                        <p>제주 제주시 한림읍 일주서로 5855 1층</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:00 ~ 24:00</p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default JejuCafe1;