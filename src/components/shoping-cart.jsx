import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/movieService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage } from './common/handleLocalStorage'

const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  let arr = [];
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('SHOPINGITEMS')
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            arr.push([...shopingItems, d]);
          }
        }
        setShopingItems(arr);
        setItemCount(arr.map(itm => ({ id: itm[0].id, value: 1 })));
      }
    })();
   
  },);

  const onIncrement = (item) => {
    const itemCount = itemCount;
    const index = itemCount.indexOf(item);
    itemCount[index].value++;
    setItemCount(itemCount);
  }
  const onDecrement = (item) => {
    const itemCount = itemCount;
    const index = itemCount.indexOf(item);
    itemCount[index].value--;
    setItemCount(itemCount);
  }
  
  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <div className="row row-cols-2 row-cols-md-4">
      {shopingItems.map(item =>
        <div className="col mb-4" key={item.id}>
          <ShopingCard
            data={item[0]}
            count={itemCount.find(itm => itm.id === item[0].id)}
            onIncerement={() => onIncrement(itemCount.find(itm => itm.id === item[0].id))}
            onDecrement={() => onDecrement(itemCount.find(itm => itm.id === item[0].id))}

          />
        </div>
      )}
    </div>

  );
}

export default ShopingCart;