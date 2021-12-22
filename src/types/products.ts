export interface ProductInterface{
    productId:number,
    productImage:string,
    productName:string,
    productCode:string,
    productQuantity:number,
    productPrice:number
}
export type ShoppingCartContextProps ={
    children:React.ReactNode
}
export type ShoppingCartContextType={
    products:ProductInterface[] | [],
    totalShoppingCart:()=>number,
    addQuantity:(id:number)=>void,
    decreaseQuantity:(id:number)=>void,
    removeFromShoppingCart:(id:number)=>void
}
export type ShoppingCartItemsProps={
    items : ProductInterface [] | []
}