import {ProductInterface} from '../../types/products'
import classes from './shopping-cart-item.module.css'
type ShoppingCartItemsProps={
    productInfo : ProductInterface 
}
const ShoppingCartItem:React.FC<ShoppingCartItemsProps> = ({productInfo}) => {
  const {productCode, productId, productImage, productName, productPrice, productQuantity} = productInfo
    return (
        <div className={classes.shopping_cart_item_container}>
           <img src={productImage} alt={productName} className={classes.product_image} />
           <div className={classes.product_info}>
               <span className={classes.product_name}>{productName}</span>
               <span className={classes.product_code}>{productCode}</span>
           </div>
        </div>
    )
}

export default ShoppingCartItem
