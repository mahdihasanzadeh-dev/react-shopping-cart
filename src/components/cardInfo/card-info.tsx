import { useForm } from "react-hook-form";
import classes from './card-info.module.css'

const CardInfo:React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) =>{
        console.log(data)
    } 
    return (
         
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <label htmlFor="name">Name on Card</label>
            <input placeholder="Giga Tamarashvili" {...register("name",{required:true})} name="name" />
            {errors.name && <span>Name on Card is required</span>}
            <label htmlFor="cardNumber">Card Number</label>
            <input placeholder="**** **** **** ****" {...register("cardNumber", { required: true })} name="cardNumber"/>
            {errors.cardNumber && <span>cardNumber is required</span>}
            <div className={classes.expiration_container}>
                <div className={classes.date_container}>
                    <label>Expiration date</label>
                    <div className={classes.date_input_container}>
                        <select {...register("month",{required:true})} defaultValue="" >
                            <option value="" disabled>mm</option>
                            <option value="Feb">Feb</option>
                            <option value="July">July</option>
                            <option value="March">March</option>
                        </select>
                        <select {...register("year",{required:true})} defaultValue="" >
                            <option value="" disabled >yy</option>
                            <option value="2021">2021</option>
                            <option value="2021">2022</option>
                            <option value="2021">2023</option>
                        </select>
                    </div>
                </div>
                <div className={classes.cvv_container}>
                    <label htmlFor="cvv">CVV</label>
                    <input placeholder="***" {...register("cvv", { required: true })} name="cvv"/>
                 
                </div>
                {errors.cvv  && <span>CVV is required</span>}
                {errors.month && <span>month is required</span>}
                {errors.year && <span>year is required</span>}
            </div>
            <button type="submit" >
                Check Out
            </button>
        </form>
    )
}

export default CardInfo
