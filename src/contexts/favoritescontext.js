import React, { createContext, useEffect, useState } from 'react';
// useEffect(() => {
//     if (localdata) {
//         console.log("localdata E", localdata);
//         setFavs(localdataParse);
//     }
// }, []);
export const FavsContext = createContext();
const FavsContextProvider = (props) => {
    const localdata = localStorage.getItem('FAVS');
    const localdataParse = localdata ? JSON.parse(localdata) : [];
    console.log("localdataParse",localdataParse);
    const [favs, setFavs] = useState(localdataParse);

    const handleFavs = (id) => {
        console.log("favs B", favs);
        setFavs(prevFavs => {
            const newFavs = prevFavs.includes(id) ? prevFavs.filter(fav => fav !== id) : [...prevFavs, id];
            localStorage.setItem('FAVS', JSON.stringify(newFavs));
            console.log("newFavs",newFavs);
            return newFavs;
        });
    }



    console.log("favs A", favs);
    console.log("local A", localStorage.getItem('FAVS'));
    return (
        <FavsContext.Provider value={{ favs, handleFavs }}>
            {props.children}
        </FavsContext.Provider>
    );
}

export default FavsContextProvider;