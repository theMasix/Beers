import React, { useEffect, useState } from 'react';
import { getbeers } from '../serveces/beerService';
import MyCardGroup from './common/cardGroup';
import { getLocalStorage } from './common/handleLocalStorage';
const Favorites = () => {
  const [favorites, setFavorits] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('starList');
      console.log("localStorageData", localStorageData);
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.some(item => item.value === d.id)) {
            setFavorits(favorites => [...favorites, d]);
          }
        }
      }
    })();

  }, []);

  if (favorites.length === 0) return <p className="lead text-center">تا کنون کالایی به لیست مورد علاقه اضافه نشده</p>;
  return (
    <MyCardGroup data={favorites} />
  );
}

export default Favorites;
