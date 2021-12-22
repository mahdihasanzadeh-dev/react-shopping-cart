import React from 'react'
import { ShoppingCartItem } from '..'
import {ShoppingCartItemsProps} from '../../types/products'
import classes from './shopping-cart-items.module.css'

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

export default React.memo(ShoppingCartItems)
