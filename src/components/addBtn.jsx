import React from 'react';
import {ImPlus} from 'react-icons/im';
import { useHistory } from 'react-router-dom';

const AddBtn = () => {
  const history = useHistory();

  const goToWrite = () => {
    history.push('/MainDiary');
    console.log("move");
  }

  return(

    <ImPlus type="button" onClick={goToWrite}/>
  );
};

export default AddBtn;