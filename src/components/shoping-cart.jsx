import React, { useState, useEffect } from 'react';
import { getbeers } from './../serveces/movieService';
import ShopingCard from './common/shoping-card';
<<<<<<< HEAD
import { getLocalStorage, setLocalStorage } from './common/handleLocalStorage'
=======
import { getLocalStorage } from './common/handleLocalStorage'
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'

const ShopingCart = () => {
  const [shopingItems, setShopingItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
<<<<<<< HEAD

=======
 
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
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
<<<<<<< HEAD
      //   let arr = [];
      //   for (let shopItem of temp) {
      //     for (let itmCount of itemCountStorage) {
      //       if (shopItem.id !== itmCount.id) {
      //         arr.push(shopItem);
      //       }
      //     }
      //   }
      // console.log(arr);

=======
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
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
<<<<<<< HEAD
    setLocalStorage("ITEMCOUNTSTORAGE", count);
=======
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
  }

  const onDecrement = (item) => {
    const count = [...itemCount];
    const index = count.indexOf(item);
    count[index].value--;
    console.log("itemCount", count);
    setItemCount(count);
<<<<<<< HEAD
    setLocalStorage("ITEMCOUNTSTORAGE", count);
=======
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
  }
  if (shopingItems.length === 0) return <p className="lead text-center">تا کنون کالایی برای خرید انتخاب نکرده ایید</p>;
  return (
    <>
<<<<<<< HEAD
      <div className="row row-cols-2 row-cols-md-5">
=======
      <div className="row row-cols-2 row-cols-md-4">
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
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
<<<<<<< HEAD
          <Button variant="info" className="ml-5" style={{ direction: "ltr", cursor: "default" }}>
=======
          <Button variant="info" className="ml-5" style={{ direction: "ltr",cursor:"default" }}>
>>>>>>> e3c825e9b26c14eb14294c838ec26818ec377c7e
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
