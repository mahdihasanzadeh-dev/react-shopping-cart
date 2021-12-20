import { useContext } from 'react'
import {ShoppingCartContext} from '../../context/shopping-cart-context'
import {ProductInterface} from '../../types/products'
import classes from './shopping-cart-item.module.css'
type ShoppingCartItemsProps={
    productInfo : ProductInterface 
}
const ShoppingCartItem:React.FC<ShoppingCartItemsProps> = ({productInfo}) => {
  const {productCode, productId, productImage, productName, productPrice, productQuantity} = productInfo
  const context = useContext(ShoppingCartContext)
  const {decreaseQuantity, addQuantity, removeFromShoppingCart} = context
    return (
        <div className={classes.shopping_cart_item_container}>
           <img src={productImage} alt={productName} className={classes.product_image} />
           <div className={classes.product_info}>
               <span className={classes.product_name}>{productName}</span>
               <span className={classes.product_code}>{productCode}</span>
           </div>
           <div className={classes.cart_item_quantity}>
               <div 
                className={`${classes.altMines} ${classes.plus}`} 
                onClick={()=>decreaseQuantity(productId)}
                style={productQuantity===0?{pointerEvents:'none'}:{}}
               />
                <div className={classes.quantity}>{productQuantity}</div>
               <div 
                className={`${classes.alt} ${classes.plus}`} 
                onClick={()=>addQuantity(productId)}
               /> 
           </div>
           <div className={classes.cart_item_price}>
                <span className={classes.dollar_sign}>$</span>
                <span>{(productPrice * productQuantity).toFixed(2)}</span>
           </div>
           <div className={classes.remove_cart_item_button} onClick={()=>removeFromShoppingCart(productQuantity)}>&times;</div>
        </div>
    )
}

export default ShoppingCartItem
