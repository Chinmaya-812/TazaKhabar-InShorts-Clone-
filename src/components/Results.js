/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { INSHORTS_API_Results } from '../utils/constant';
import Card from './Card';
import { useSearchParams } from 'react-router-dom';

const Results = () => {
  const [data, SetData] = useState([]);
  const [page, SetPage] = useState(1);
  const type = '&type=NEWS_CATEGORY';
  const [items, setItems] = useState([]);

  const [searchParams] = useSearchParams();
  const [params, Setparams] = useState('');

  const FetchResultData = async () => {
    try {
      const URL = await fetch(
        `${INSHORTS_API_Results}${searchParams.get('q')}?page=${page}${type}`
      );

      if (!URL.ok) {
        throw new Error(`Network response was not ok: ${URL.statusText}`);
      }
      const data = await URL.json();
      SetData(data?.data?.news_list);
      setItems((prevItems) =>
        page === 1
          ? data?.data?.news_list
          : [...prevItems, ...data?.data?.news_list]
      );
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const handleClick = () => {
    SetPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    FetchResultData();
  }, [page, params]);

  useEffect(() => {
    SetPage(1);
    Setparams(searchParams.get('q'));
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center flex-col mt-16">
      {items &&
        items.map((i, index) => {
          if (i.news_obj) {
            return <Card {...i.news_obj} key={`${i.hash_id}-${index}`} />;
          }
        })}
      <button onClick={handleClick} className="bg-red-300 p-3 rounded-lg">
        Load More
      </button>
    </div>
  );
};

export default Results;
