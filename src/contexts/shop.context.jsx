import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

const ShopContext = createContext({
    products: [],
})

export const ShopContextProvider = ({children}) => {

    const [products, setProducts] = useState(SHOP_DATA);

    const value = {
        products,
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext;