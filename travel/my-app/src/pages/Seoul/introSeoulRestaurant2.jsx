import React, { useState } from "react";
import './DetailPage.css';
import SeoulImage from '../images/서울맛집2.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function SeoulRestaurant2() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "신선한 재료와 다양한 조리법으로 손님들께 다채롭고 한결 같은 요리를 제공하기 위해 최선을 다하는 퓨전덮밥/파스타 맛집입니다.";

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
                        <h1>연남토마 연남본점</h1>
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
                        <p>서울 마포구 월드컵북로6길 61 연남토마</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>매일 11:30 - 21:30 20:30 라스트 오더</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} /></li>
                    <li>
                        <p><a href="https://app.catchtable.co.kr/ct/shop/yntm_yn">https://app.catchtable.co.kr/ct/shop/yntm_yn</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SeoulRestaurant2;