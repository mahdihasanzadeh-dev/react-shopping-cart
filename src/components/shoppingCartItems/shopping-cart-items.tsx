import { ShoppingCartItem } from '..'
import {ProductInterface} from '../../types/products'
import classes from './shopping-cart-items.module.css'
type ShoppingCartItemsProps={
    items : ProductInterface [] | []
}
const ShoppingCartItems:React.FC<ShoppingCartItemsProps> = ({items}) => {
    return (
        <div className={classes.shopping_cart_items_container}>
            {
                items.map(product=>
                    <ShoppingCartItem
                        key={product.productId}
                        productInfo={product}
                    />
                )
            }
        </div>
    )
}

export default ShoppingCartItems
