import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/movieService';
import ShopingCard from './common/shoping-card';
import { getLocalStorage } from './common/handleLocalStorage'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'

const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 
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


  }, []);

  useEffect(() => {
    let total = 0;
    for (let item of shopingItems) total += item.srm * itemCount.find(itm => itm.id === item.id)?.value;
    setTotalPrice(total);
  }, [itemCount])

  const onIncrement = (item) => {
    const count = [...itemCount];
    const index = count.indexOf(item);
    count[index].value++;
    setItemCount(count);
  }

  const onDecrement = (item) => {
    const count = [...itemCount];
    const index = count.indexOf(item);
    count[index].value--;
    console.log("itemCount", count);
    setItemCount(count);
  }
  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <>
      <div className="row row-cols-2 row-cols-md-4">
        {shopingItems.map(item =>
          <div className="col mb-4" key={item.id}>
            <ShopingCard
              data={item}
              count={itemCount.find(itm => itm.id === item.id) || []}
              onIncerement={() => onIncrement(itemCount.find(itm => itm.id === item.id))}
              onDecrement={() => onDecrement(itemCount.find(itm => itm.id === item.id))}

            />
          </div>
        )}
      </div>
      <Card body className="mb-5" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 4px 4px 4px 4px" }}>
        <div className="d-flex justify-content-center">
          <Button variant="info" className="ml-5" style={{ direction: "ltr",cursor:"default" }}>
            مبلغ قابل پرداخت <Badge variant="light">{totalPrice}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <ButtonGroup aria-label="Basic example" style={{ direction: "ltr" }}>
            <Button variant="success">پرداخت</Button>
            <Button variant="danger">انصراف</Button>
          </ButtonGroup>
        </div>
      </Card>


    </>

  );
}

export default ShopingCart;