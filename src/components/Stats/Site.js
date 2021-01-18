import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/users/averydl',
    );
    const repoRes = await fetch(
      'https://api.github.com/users/averydl/repos',
    );
    const resData = await res.json();
    const repoData = await repoRes.json();
    const languages = [...new Set(repoData.map(({ language }) => language))]
      .filter((x) => x != null)
      .join(', ');
    resData.languages = languages;
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>Some stats about my GitHub</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
