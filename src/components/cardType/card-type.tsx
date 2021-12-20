import classes from './card-type.module.css'

const CardType:React.FC = () => {
    return (
        <div className=" mt-8">
            <span className={classes.title}>Card Type</span>
            <div className={classes.card_type_container}>
                <div className={classes.visa_card_container}>
                    <span className={classes.card_name}>VISA</span>
                    <div className={classes.card_numbers}>
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                    </div>
                    <div className={classes.card_owner}>
                        <span>Giga Tamarashvili</span>
                        <span>12/18</span>
                    </div>
                </div>
                <div className={classes.master_card_container}>
                    <div className={classes.circles_container}>
                        <div className={classes.red_circle}></div>
                        <div className={classes.orange_circle}></div>
                    </div>
                    <span>mastercard</span>
                </div>
            </div>
        </div>
    )
}

export default CardType
