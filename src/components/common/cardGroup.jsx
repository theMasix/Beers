import React, { useState } from "react";
import ShowModalCard from "./../showModalCard";
import { useEffect } from "react";

const localList = "starList";

const MyCardGroup = ({ data }) => {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    const presetList = localStorage.getItem(localList);
    if (presetList) {
      setStarList(JSON.parse(presetList));
    }
  }, []);

  const changeList = (list) => {
    setStarList(list);
    localStorage.setItem(localList, JSON.stringify(list));
  };

  const handleStarClick = (id) =>
    starList.includes(id)
      ? changeList(starList.filter((startId) => startId !== id))
      : changeList([...starList, id]);

  return (
    <div className="row row-cols-2 row-cols-md-4">
      {data.map((d, index) => {
        const key = `cardShopItem${index}${d.id}`;
        return (
          <div className="col mb-4" key={key}>
            <ShowModalCard
              data={d}
              isStarActive={starList.includes(d.id)}
              onStarClick={() => handleStarClick(d.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyCardGroup;
