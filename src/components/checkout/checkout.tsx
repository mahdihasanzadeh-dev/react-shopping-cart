import { useContext } from 'react'
import {ShoppingCartContext} from '../../context/shopping-cart-context'
import { Heading, ShoppingCartItems,Bill } from '..'
import classes from './checkout.module.css'
const Checkout:React.FC = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className={classes.checkout_conainer}>
            <Heading
                title="Shopping Cart"
            />
            <ShoppingCartItems
                items={context.products}
            />
            <Bill 
                totalShoppingCart={context.totalShoppingCart}
            />
        </div>
    )
}

export default Checkout
