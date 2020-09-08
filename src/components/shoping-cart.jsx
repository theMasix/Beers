import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/movieService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage } from './common/handleLocalStorage'

const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  let temp = [];
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('SHOPINGITEMS')
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            temp.push(d);
          }
        }
        setShopingItems(temp);
        setItemCount(temp.map(itm => ({ id: itm.id, value: 1 })));
      }

    })();


  });
  const onIncrement = (item) => {
    const count = itemCount;
    const index = count.indexOf(item);
    count[index].value++;
    setItemCount(count);
  }
  const onDecrement = (item) => {
    const count = itemCount;
    const index = count.indexOf(item);
    count[index].value--;
    setItemCount(count);
  }
  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <div className="row row-cols-2 row-cols-md-4">
      {shopingItems.map(item =>
        <div className="col mb-4" key={item.id}>
          <ShopingCard
            data={item}
            count2={itemCount.find(itm => itm.id === item.id)}
            onIncerement={() => onIncrement(itemCount.find(itm => itm.id === item.id))}
            onDecrement={() => onDecrement(itemCount.find(itm => itm.id === item.id))}

          />
        </div>
      )}
    </div>

  );
}

export default ShopingCart;