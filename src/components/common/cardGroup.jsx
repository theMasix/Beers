import React, { useState } from 'react';
import ShowModalCard from './../showModalCard';
import { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './handleLocalStorage';

// Context
import FavsContextProvider from '../../contexts/favoritescontext';

const localList = 'starList';

const MyCardGroup = ({ data }) => {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    const presetList = getLocalStorage(localList);
    setStarList(presetList);
  }, []);

  const changeList = (list) => {
    setStarList(list);
    setLocalStorage(localList, list);
  };

  const handleStarClick = (id) => {
    starList.some((item) => item.value === id)
      ? changeList(starList.filter((item) => item.value !== id))
      : changeList([
          ...starList,
          { value: id, expiry: new Date().getTime() + 2.628e9 },
        ]);
  };
  //2.628e+9 one month
  //59999.9342466479939 one minute
  return (
    <div className='row row-cols-1 row-cols-md-6'>
      <FavsContextProvider>
        {data.map((d, index) => {
          const key = `card${index}${d.id}`;
          return (
            <div key={key}>
              <ShowModalCard
                data={d}
                isStarActive={starList.some((item) => item.value === d.id)}
                onStarClick={() => handleStarClick(d.id)}
              />
            </div>
          );
        })}
      </FavsContextProvider>
    </div>
  );
};

export default MyCardGroup;
