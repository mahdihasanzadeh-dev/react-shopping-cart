import React from 'react'
import classes from './bill.module.css'
type BillProps = {
    totalShoppingCart:()=>number
}
const Bill:React.FC<BillProps> = ({totalShoppingCart}) => {
    return (
        <div className={classes.bill_container}>
           <div className={classes.continue}>
                <div className={classes.arrow}> 
                        <div className={classes.point}></div>
                        <div className={classes.line}></div>
                </div>
                <span>Continue Shopping</span>
           </div>
           <div className={classes.totoal}>
              <span> Subtotal :</span>
              <span>${totalShoppingCart()}</span>
           </div>
        </div>
    )
}

export default React.memo(Bill)
