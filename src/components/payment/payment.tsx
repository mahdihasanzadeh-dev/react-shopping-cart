import { Heading,CardType,CardInfo } from '..'
import classes from './payment.module.css'
const Payment:React.FC = () => {
    return (
        <div className={classes.payment_container}>
            <Heading
                title="Card Details"
                styles={{color:'#fff'}}
             />
            <CardType />
            <CardInfo />
        </div>
    )
}

export default Payment
