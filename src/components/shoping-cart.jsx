import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/movieService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage } from './common/handleLocalStorage'
const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('SHOPINGITEMS')
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            setShopingItems(shopingItems => [...shopingItems, d]);
          }
        }
      }
    })();

  }, []);
//   const [itemCount, setItemCount] = useState([]);
//   shopingItems.map(item => {
//     itemCount.push({ id: item.id, value: 0 })
//   });
  
//  const handleIncrement = item => {
//     const index = itemCount.indexOf(item);   
//     itemCount[index].value++;
//     setItemCount(itemCount);
//   }
//  const handleDecrement = item => {
//     const index = itemCount.indexOf(item);   
//     itemCount[index].value--;
//     setItemCount(itemCount);
//   }
  

  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <div className="row row-cols-2 row-cols-md-4">
      {shopingItems.map(item =>
        <div className="col mb-4">
          <ShopingCard
            data={item}
            key={item.id}
          
          />
        </div>
      )}
    </div>

  );
}

export default ShopingCart;