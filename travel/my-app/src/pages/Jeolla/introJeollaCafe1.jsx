import React, { useState } from "react";
import './DetailPage.css';
import Detailimage from '../images/전라도카페1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BiNotepad, BiTimeFive } from "react-icons/bi";

function JeollaCafe1() {
    // 170글자가 넘어가면 접기/더보기
    const [expanded, setExpanded] = useState(false);
    const text = "이보다 더 다채롭고 멋진 인테리어의 여수 카페는 없다. 독보적인 여수 오션뷰 카페 룩스카바나 (LUXCAVANA) 3층 건물 350평 규모의 초대형 여수 돌산 카페에서 광활하게 펼쳐진 바다를 보며 즐기는 신나고 감미로운 디제잉 ! 낮에는 사랑하는 사람들과 바다를 보며 여유를 만끽하고 저녁에는 네온사인이 비치는 물멍과 함께 화려한 분위기 속에서 감성 가득한 음악으로 낭만과 자유를 느낄 수 있는 매력적인 공간입니다.";

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
                        <h1>룩스카바나</h1>
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
                        <p>전남 여수시 돌산읍 마상포길 12 luxcavana</p>
                    </li>
                    </li>
                    <li>
                    <li>
                        <BiTimeFive size={25} />
                    </li>
                    <li>
                        <p>10:00 ~ 22:00</p>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default JeollaCafe1;