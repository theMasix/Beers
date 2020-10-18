import React, { createContext, useState } from 'react';
export const FavsContext = createContext();

// Get data from localStorage and parse it
const localdata = localStorage.getItem('FAVS');
const localdataParse = localdata ? JSON.parse(localdata) : [];

const FavsContextProvider = (props) => {
  // Set data to context store
  const [favs, setFavs] = useState(localdataParse);

  const handleFavs = (id) => {
    console.log('favs', favs);
    setFavs((prevFavs) => {
      const newFavs = prevFavs.includes(id)
        ? prevFavs.filter((fav) => fav !== id)
        : [...prevFavs, id];
      localStorage.setItem('FAVS', JSON.stringify(newFavs));
      console.log('newFavs', newFavs);
      return newFavs;
    });
  };

  return (
    <FavsContext.Provider value={{ favs, handleFavs }}>
      {props.children}
    </FavsContext.Provider>
  );
};

export default FavsContextProvider;
