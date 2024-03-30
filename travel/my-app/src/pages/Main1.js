import React, { useState, useEffect } from 'react';
const styles = {
    image: {
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      width: '100%' ,
      height: 512,
    },
    text2: {
      color: "white",
      fontSize: 30,
      position: "fixed", 
      top: "90%", 
      left: "25%", 
      transform: "translate(-50%, -50%)",
    },
    text: {
      color: "white",
      fontSize: 30,
      position: "absolute", 
      top: "90.4%", 
      left: "3%",  
      transform: "translate(-50%, -50%)",
    },
    lButton: {
      color: "white",
      fontSize: 30,
      backgroundColor: "transparent",
      border: "none",
      position: "absolute", 
      top: "50%", 
      left: "15px", 
      transform: "translate(-50%, -50%)",
    },
    rButton: {
      color: "white",
      fontSize: 30,
      backgroundColor: "transparent",
      border: "none",
      position: "absolute", 
      top: "50%", 
      right: "0px", 
      transform: "translate(-50%, -50%)",
    },
} 

function Main1 () {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {name: "서울", 
      image: require("../images/서울.jpg"),
    },
    {name: "경기", 
      image: require("../images/경기도.jpg"),
    },
    {name: "강원", 
      image: require("../images/강원도.jpg"),
    },
    {name: "경상", 
      image: require("../images/경상도.jpg"),
    },
    {name: "전라", 
      image: require("../images/전라도.jpg"),
    },
    {name: "충청", 
      image: require("../images/충청도.jpg"),
    },
    {name: "제주", 
      image: require("../images/제주도.jpg"),
    },
  ];

  const imageLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % imageLength);
    }, 4000);
    return () => clearInterval(interval);
  }, [imageLength]);

  const lButton = (e) =>{
    setCurrentSlide((current) => (current + imageLength - 1) % imageLength);
  }

  const rButton = (e) =>{
    setCurrentSlide((current) => (current + 1) % imageLength);
  }

  return (
    <div style={{ position: 'relative'}}>
      <h1 style={styles.text}>
        {images[currentSlide].name}
      </h1>
      <h1 style={styles.text2}>
        {images[currentSlide].name}
      </h1>
      <button style={styles.lButton} onClick={lButton}> &lt; </button> 
      <button style={styles.rButton} onClick={rButton}> &gt; </button>
      <img 
      src={images[currentSlide].image}
      style={styles.image}
      />
      
    </div>
  );
}

export default Main1;