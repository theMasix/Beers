import React, { useEffect, useState } from 'react';
import { getbeers } from './../serveces/movieService';
import MyCardGroup from './common/cardGroup';
const Favorites = () => {
  const [favorites, setFavorits] =useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = localStorage.getItem("BEER") ? JSON.parse(localStorage.getItem("BEER")) : [];
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            setFavorits(favorites=>[...favorites,{d}])
          }
        }
      }
    })();
   
  }, [])
  return (
    <MyCardGroup data={favorites} />
  );
}

export default Favorites;
