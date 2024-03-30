import React, { useState } from "react";
import './DetailPage.css';
import SeoulImage from '../images/서울코스1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function SeoulPlace1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "창덕궁 달빛기행은 은은 달빛아래 녹음이 어우러진 창덕궁에서 전문해설사와 함께 궁궐의 곳곳을 관람하며, 각 전각에 대한 해설과 전통예술공연을 관람할 수 있는 프로그램이다.창덕궁 정문인 돈화문에서 출발해 진선문 · 인정전 · 희정당 · 낙선재 · 상량정 · 부용지 · 불로문 · 애련정 · 연경당 · 후원 숲길을 이동하며 창덕궁 달빛기행에서만 경험할 수 있는 특별한 감동을 선사한다.";

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
                    backgroundImage: `url(${SeoulImage})`,
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
                        <h1>창덕궁 달빛기행</h1>
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
                        <p>창덕궁 (서울 종로구 율곡로 99)</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>2023.09.07. (목) ~ 2023.10.22. (일)</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} />
                    </li>
                    <li>
                        <p><a href="https://www.chf.or.kr/chf">https://www.chf.or.kr/chf</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SeoulPlace1;
