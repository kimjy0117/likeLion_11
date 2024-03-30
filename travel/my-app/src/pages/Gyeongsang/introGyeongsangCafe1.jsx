import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/경상도카페1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive, BiWindowAlt } from "react-icons/bi";

function GyeongsangCafe1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "통영의 발코니 네르하21카페는 스페인의 아름다운 해변에 '유럽의 발코니'라 불리는 휴양지 NERJA와 닮은 듯 ~~절벽과 암반......해안선이 멋지게 어우러진 '네르하21'이 세상에 하나뿐인 '통영의 발코니' '네르하21'에서 여러분을 맞이 합니다. 남해의 여러 섬들을 바라보며 소중한 추억 가득 담아 가세요. ♡♡네르하21 베이커리는 1등급 우리밀, 유기농설탕,  뉴질랜드산 청정버터, 프랑스에서 공수한 고매버터등 신선하고 최상의 재료들만 엄선하여 건강하고 맛있는 빵을 정직하게 당일 생산하여 제공해드리고 있습니다.";

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
                        <h1>네르하21카페</h1>
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
                        <p>경남 통영시 도산면 도산일주로 954 네르하21카페</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:00 ~ 21:00</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiWindowAlt size={25} /></li>
                    <li>
                        <p><a href="https://www.instagram.com/cafe_nerja21_official">https://www.instagram.com/cafe_nerja21_official</a></p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GyeongsangCafe1;