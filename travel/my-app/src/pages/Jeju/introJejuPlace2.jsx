import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/제주도코스2.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function JejuPlace2() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "넥슨컴퓨터박물관은 인류의 삶을 가장 빠르게 변화시킨 현재 진행형 매체인 '컴퓨터'와 그 발전에 기여해 온 '게임'의 역사를 함께 조망함으로써 우리의 미래를 상상해 볼 수 있는 체험형 박물관이다.";

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
                        <h1>넥슨컴퓨터박물관</h1>
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
                        <p>제주 제주시 1100로 3198-8 넥슨컴퓨터박물관</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:00 - 18:00</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} /></li>
                    <li>
                        <p><a href="computermuseum.nexon.com">computermuseum.nexon.com</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default JejuPlace2;