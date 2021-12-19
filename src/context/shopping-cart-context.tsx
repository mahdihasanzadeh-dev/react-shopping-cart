import React,{ useState} from 'react'
import {DUMMY_DATA} from '../data/DUMMY_DATA'
import {ProductInterface} from '../types/products'
type ShoppingCartContextProps ={
    children:React.ReactNode
}
type ShoppingCartContextType={
    products:ProductInterface[] | []
}
export const ShoppingCartContext = React.createContext({
    products:DUMMY_DATA
} as ShoppingCartContextType)
const ShoppingCartContextProvider:React.FC<ShoppingCartContextProps> = ({children}) => {
    const [shoppingCartItems,setShoppingCartItems] = useState<ProductInterface [] | []>(DUMMY_DATA)
    const context ={
        products:shoppingCartItems
    }
    return (
        <ShoppingCartContext.Provider value={context}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider
