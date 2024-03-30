import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hoverImage from '../images/maurizio_cattelan.jpg';
import calendarIcon from '../images/icon_calendar.png';
import './Main3.css';


function Main3() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
      setIsHover(true);
    };
  
    const handleMouseOut = () => {
      setIsHover(false);
    };
  
    return (
      <div className='Main-time'>
        <div className='container'>
          <div className='time'>
            <img src={calendarIcon} alt="calendarIcon" className='time_icon' />
            <h2 className='time_text'>시간이 얼마 안 남았어요!</h2>
          </div>
          <div
            className="image-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className={`event-text ${isHover ? 'hidden' : ''}`}>
              <h1 className='event-name'>마우리치오 카텔란: WE</h1>
              <h1 className='event-date'>2023.01.31 - 2023.07.16</h1>
            </div>
            <div
              className={`image ${isHover ? "hovered" : ""}`}
              style={{
                backgroundImage: `url(${hoverImage})`,
              }}>
            </div>
            <Link to='/intro/Seoul/place2'><button className='detail_button'>자세히 보기</button></Link>
          </div>
        </div>
      </div>
  );
}

export default Main3;