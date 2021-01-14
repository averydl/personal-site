import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.25; // ms in an average year
    const birthTime = new Date('1995-01-31T00:09:07');
    setAge(((Date.now() - birthTime) / divisor).toFixed(8));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
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
