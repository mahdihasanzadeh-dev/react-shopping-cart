import { Checkout, Payment } from '..'
import classes from './shopping-cart.module.css'
const ShoppingCart:React.FC = () => {
    return (
        <div className="row">
            <div className={classes.shopping_cart_container}>
                <Checkout />
                <Payment />
            </div>
        </div>
    )
}

export default ShoppingCart
