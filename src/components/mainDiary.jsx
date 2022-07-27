import React from 'react';
import EmotionColor from './emotionColor';

const MainDiary = () => {

  const today = new Date();
  const month = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12'];
  const date = today.getDate();
  const days = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];


  return (
    <>
      <span>
        {month[today.getMonth()]}월 {date}일 {days[today.getDay()]}
      </span>
      <p>오늘의 감정</p>
      <EmotionColor />
    </>
  )
};

export default MainDiary;