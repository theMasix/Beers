import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/beerService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage } from './common/handleLocalStorage'
import PaymentCard from './common/paymentCard';


const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketItemCount, setBasketItemCount] = useState(0);

  let shopItemsTemp = [];
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('SHOPINGITEMS')
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            shopItemsTemp.push(d);
          }
        }
        setShopingItems(shopItemsTemp);
        setItemCount(shopItemsTemp.map(itm => ({ id: itm.id, value: 1 })));
      }
    })();
  }, []);

  useEffect(() => {
    let total = 0;
    for (let item of shopingItems) total += item.srm * itemCount.find(itm => itm.id === item.id)?.value;
    setTotalPrice(total);
  }, [itemCount])

  useEffect(() => {
    setBasketItemCount(shopingItems.length);
  }, [shopingItems]);

  const handleIncrementDecrement = (item, operation) => {
    const count = [...itemCount];
    const index = count.indexOf(item);
    operation === "increment" ? count[index].value++ : count[index].value--;
    if (count[index].value === 0) setShopingItems(shopingItems.filter(item => item.id !== count[index].id)); 
    setItemCount(count);
  }
  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="row row-cols-1 row-cols-md-4">
            {shopingItems.map(item =>
              <div className="col mb-4" key={item.id}>
                <ShopingCard
                  data={item}
                  count={itemCount.find(itm => itm.id === item.id) || []}
                  onIncerement={() => handleIncrementDecrement(itemCount.find(itm => itm.id === item.id), "increment")}
                  onDecrement={() => handleIncrementDecrement(itemCount.find(itm => itm.id === item.id), "decrement")}

                />
              </div>
            )}
          </div>
        </div>
        <div className="col">
          <PaymentCard
            totalPrice={totalPrice}
            basketItemCount={basketItemCount}
          />
        </div>
      </div>




    </>
  );
}
export default ShopingCart;