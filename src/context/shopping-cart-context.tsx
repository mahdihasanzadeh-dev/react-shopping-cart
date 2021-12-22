import React,{ useState} from 'react'
import {DUMMY_DATA} from '../data/DUMMY_DATA'
import {
    ProductInterface,
    ShoppingCartContextProps,
    ShoppingCartContextType
} from '../types/products'


export const ShoppingCartContext = React.createContext({
    products:DUMMY_DATA
} as ShoppingCartContextType)
const ShoppingCartContextProvider:React.FC<ShoppingCartContextProps> = ({children}) => {
    const [shoppingCartItems,setShoppingCartItems] = useState<ProductInterface [] | []>(DUMMY_DATA)
    const totalShoppingCart = ()=>{
        let sum =0;
        shoppingCartItems.map(item=>{
            sum += item.productQuantity * item.productPrice
        })
        return Number(sum.toFixed(2))
    }
    const addQuantity = (id:number)=>{
        const temp = [...shoppingCartItems]
        const index = temp.findIndex(item=>item.productId===id)
        temp[index].productQuantity +=1;
        setShoppingCartItems(temp)
    }
    const decreaseQuantity = (id:number)=>{
        const temp = [...shoppingCartItems]
        const index = temp.findIndex(item=>item.productId===id)
        if(temp[index].productQuantity>0){
            temp[index].productQuantity -=1;
            setShoppingCartItems(temp)
        }
    }
    const removeFromShoppingCart =(id:number)=>{
        const temp = [...shoppingCartItems]
        const index = temp.findIndex(item=>item.productId===id)
        temp.splice(index,1)
        setShoppingCartItems(temp)
    }
    const context ={
        products:shoppingCartItems,
        totalShoppingCart:totalShoppingCart,
        addQuantity:addQuantity,
        decreaseQuantity:decreaseQuantity,
        removeFromShoppingCart:removeFromShoppingCart
    }
    return (
        <ShoppingCartContext.Provider value={context}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider
