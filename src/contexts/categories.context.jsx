import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesContextProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = {
        categoriesMap,
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;