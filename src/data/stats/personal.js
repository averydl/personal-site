import React, { useState, useEffect } from 'react';
import { DateTime, Interval } from 'luxon';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const bday = DateTime.fromISO('1995-01-31T17:07:00Z'); // birth date/time (UTC)
    const date = DateTime.utc();
    const ageStr = Interval.fromDateTimes(bday, date);
    setAge(ageStr.length('years').toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 50);
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
