import * as S from "./Main.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../common/api/questionsApi.json";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const [selectedResponses, setSelectedResponses] = useState([]); // 선택한 응답을 저장할 배열
  const [activeIndex, setActiveIndex] = useState(null);

  const imageUrls = questions.map((question) => question.img);

  const preloadImages = (urls) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    preloadImages(imageUrls);
  }, [imageUrls]);

  const handleAnswerClick = async (index) => {
    if (num < 9) {
      setActiveIndex(index);
      setNum(num + 1);
      const updatedResponses = [...selectedResponses, index];
      setSelectedResponses(updatedResponses);

      if (num === 8) {
        await sendUserClickToServer(updatedResponses);
      }
    }
  };

  const sendUserClickToServer = async (responses) => {
    try {
      const url = "https://easymiracle.pythonanywhere.com/menus/recommend";

      const data = {
        responses: responses.map((response) => parseInt(response, 10)),
      };
      console.log(data);

      const response = await axios.post(url, data);

      const recommendedFood = response.data.recommended_food;

      setNum(num + 1); //화면을 업데이트

      navigate(
        `/loading?first=${recommendedFood.first}&second=${recommendedFood.second}`
      );

      console.log("성공", response.data);
    } catch (error) {
      console.error("실패", error);
    }
  };
  return (
    <S.Container>
      {num < 9 && (
        <>
          <S.Number>
            <p>Q.0{questions[num]?.id || 1}</p>
          </S.Number>
          <S.Question>
            <p>{questions[num]?.question || ""}</p>
          </S.Question>
          <S.QImg
            src={questions[num]?.img || ""}
            style={S.imageStyles[questions[num]?.id || 1]}
          ></S.QImg>
          <S.QContainer>
            {questions[num]?.answers.map((answer) => (
              <S.Answer
                key={answer.type}
                active={activeIndex === answer.type}
                onClick={() => handleAnswerClick(answer.type)}
              >
                <p>{answer.content}</p>
              </S.Answer>
            ))}
          </S.QContainer>
          <S.Progress src={questions[num]?.progress || ""}></S.Progress>
        </>
      )}
    </S.Container>
  );
}

export default Main;
