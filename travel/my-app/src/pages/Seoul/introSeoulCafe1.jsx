import React, { useState } from "react";
import './DetailPage.css';
import SeoulCafeTopImage from '../images/서울카페1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function SeoulCafe1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "다정한 스텝과 방금 나온 베이글 그리고 따뜻한 수프가 기다리는 가장 가까운 런던 속 베이글 뮤지엄 국내 어디에서도 맛볼 수 없었던 베이글의 식감과 무드를 선보입니다.";

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
                    backgroundImage: `url(${SeoulCafeTopImage})`,
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
                        <h1>런던 베이글 뮤지엄 안국점</h1>
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
                        <p>서울 종로구 북촌로4길 20</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>매일 08:00 - 18:00</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} /></li>
                    <li>
                        <p><a href="https://www.instagram.com/london.bagel.museum/">https://www.instagram.com/london.bagel.museum/</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SeoulCafe1;
