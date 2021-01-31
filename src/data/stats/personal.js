import React, { useState, useEffect } from 'react';

const getAge = (birth) => {
  const date = new Date();
  const y = date.getUTCFullYear() - birth.getUTCFullYear();
  const m = date.getUTCMonth() - birth.getUTCMonth();
  const d = date.getUTCDate() - birth.getUTCDate();
  const hrs = date.getUTCHours() - birth.getUTCHours();
  const mins = date.getUTCMinutes() - birth.getUTCMinutes();
  const secs = date.getUTCSeconds() - birth.getUTCSeconds();
  const ms = date.getUTCMilliseconds() - birth.getUTCMilliseconds();
  return `${y}y ${m}m ${d}d ${hrs}h ${mins}m ${(secs + (ms / 1000)).toFixed(2)}s`;
};

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const birth = new Date('1995-01-31T17:07:00Z'); // birth date/time (UTC)
    const agestr = getAge(birth);
    setAge(agestr);
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 10);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age:',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current City:',
    value: 'Seattle, WA',
  },
];

export default data;
