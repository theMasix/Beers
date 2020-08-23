import React, { useEffect, useState } from 'react';
import { getbeers } from './../serveces/movieService';
import MyCardGroup from './common/cardGroup';
const Handler = ({localStorageName}) => {
  const [componentType, setComponentType] =useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = localStorage.getItem(localStorageName) ? JSON.parse(localStorage.getItem(localStorageName)) : [];
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            setComponentType(componentType=>[...componentType,{d}])
          }
        }
      }
    })();
   
  })
  return (
    <MyCardGroup data={componentType} />
  );
}

export default Handler;
