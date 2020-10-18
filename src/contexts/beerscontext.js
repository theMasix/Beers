import React, { createContext, useState, useEffect } from 'react';
import { getbeers } from '../serveces/beerService';
export const BeerContext = createContext();
const BeerContextProvider = (props) => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await getbeers();
            if (data) setBeers(data);
        }
        getData()
    }, [])
    // useEffect(() => {
    //     (async () => {
    //         const { data } = await getbeers();
    //         if (data) setBeers(data);
    //     })();
    // }, []);

    return (
        <BeerContext.Provider value={{ beers }}>
            {props.children}
        </BeerContext.Provider>
    );
}

export default BeerContextProvider;