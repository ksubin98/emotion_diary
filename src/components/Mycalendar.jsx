import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' ;
import AddBtn from './addBtn';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const click = (e) => {
    console.dir(e);
    console.log(e.value)
  }

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <span className="text-gray-500 mt-4" onClick={click}>
        {moment(value).format("YYYY년 MM년 DD일")}
      </span> <AddBtn />
    </>
  );
}

export default MyCalendar;