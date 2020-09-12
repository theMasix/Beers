import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/beerService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage, setLocalStorage } from './common/handleLocalStorage'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'

const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  let temp = [];
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      let localStorageData = getLocalStorage('SHOPINGITEMS');
      let itemCountStorage = getLocalStorage('ITEMCOUNTSTORAGE');
      setItemCount(itemCountStorage);
      if (localStorageData) {
        for (let d of data) {
          if (localStorageData.includes(d.id)) {
            temp.push(d);
          }
        }
        setShopingItems(temp);
        let arr = [];
        for (let shopItem of temp) {
          if (!itemCount.some(item => item.id === shopItem.id)) {
            arr.push({ id: shopItem.id, value: 1 });
          }
        }
        setItemCount(itemCount => [...itemCount, ...arr]);
      }

    })();


  }, []);

  useEffect(() => {
    setBasketItemCount(shopingItems.length);
  }, [shopingItems]);

  useEffect(() => {
    let total = 0;
    for (let item of shopingItems) total += item.srm * itemCount.find(itm => itm.id === item.id)?.value;
    setTotalPrice(total);
    setLocalStorage("ITEMCOUNTSTORAGE", itemCount);
  }, [itemCount])


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
      <div className="row row-cols-2 row-cols-md-5">
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
      <Card body className="mb-5" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 4px 4px 4px 4px" }}>
        <div className="d-flex justify-content-center">
          <Button variant="info" className="ml-5" style={{ direction: "ltr", cursor: "default" }}>
            <Badge variant="light">{basketItemCount}</Badge> تعداد کالاها
          </Button>
          <Button variant="info" className="ml-5" style={{ direction: "ltr", cursor: "default" }}>
            <Badge variant="light">{totalPrice}</Badge> مبلغ قابل پرداخت
          </Button>
          <ButtonGroup aria-label="Basic example" style={{ direction: "ltr" }}>
            <Button variant="danger">انصراف</Button>
            <Button variant="success">پرداخت</Button>
          </ButtonGroup>
        </div>
      </Card>


    </>
  );
}
export default ShopingCart;