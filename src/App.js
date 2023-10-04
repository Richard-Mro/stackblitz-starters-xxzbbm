import React, { useEffect, useState } from 'react';

import useHelloWorld from './custom-hooks/useHelloWorld.js';

import './style.css';

const useDate = () => {
  const [date, setDate] = useState(new Date());

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  const addDay = (numberOfDays) => {
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numberOfDays);
    setDate(newDate);
  };

  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    setDate(newDate);
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default function App() {
  const [input, setInput] = useState('');
  const { value, setValue } = useHelloWorld();

  const { date, getDay, getMonth, addDay, addMonth } = useDate();

  console.log('----->', value);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  useEffect(() => {
    console.log('Input changed');
  }, [input]);

  return (
    <div>
      {value}
      <br />
      Date: {date.toString()}
      <br />
      Day: {getDay()}
      <br />
      Month: {getMonth()}
      <br />
      <input type="text" onChange={handleChange} />
     
      <button
        onClick={() => {
          setValue(input);
        }}
      >
        Change The World
        
      </button>
      <br/>
      <br/>
      <button onClick={() => addDay(1)}>Add 1 Day</button>
      <button onClick={() => addDay(7)}>Add 1 Week</button>
      <button onClick={() => addMonth(1)}>Add 1 Month</button>
    </div>
  );
}
