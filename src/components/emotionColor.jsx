import React, {useState} from 'react';
import { CirclePicker } from 'react-color';

const EmotionColor = () => {
  const [color, setColor] = useState("#4A90E2");

  return(
    <>
    <CirclePicker 
      color={color}
      onChangeComplete={color => {
        setColor(color.hex);
      }}
    />
    <div
      style={{
        backgroundColor: color,
        height: "300px",
        transition: "ease all 500ms"
      }}
    />
    </>
  )
}

export default EmotionColor;