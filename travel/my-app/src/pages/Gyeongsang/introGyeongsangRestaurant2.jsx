import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/경상도맛집2.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive } from "react-icons/bi";

function GyeongsangRestaurant2() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "해목은 일본 나고야의 명물인 히츠마부시(장어덮밥) 전문점입니다. 추가로, 해산물 덮밥과 모둠 튀김도 함께 즐길 수 있습니다.";

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
                        <h1>해목</h1>
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
                        <p>부산광역시 해운대구 구남로24번길 8</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>11:00 - 22:00</p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GyeongsangRestaurant2;