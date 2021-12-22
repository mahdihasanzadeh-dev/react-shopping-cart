import { DUMMY_DATA } from '../../data/DUMMY_DATA';
import ShoppingCartContextProvider,{ShoppingCartContext} from '../../context/shopping-cart-context'
import {  render } from "@testing-library/react";

describe('<Bill/>',()=>{
    it('Total Shopping cart price',()=>{
        const {getByTestId} =render(
            <ShoppingCartContextProvider>
                <ShoppingCartContext.Consumer>
                    {
                        (context)=>(
                            <span data-testid="total">${context.totalShoppingCart()}</span>
                        )
                    }
                </ShoppingCartContext.Consumer>
            </ShoppingCartContextProvider>
        )
        let total =0;
        DUMMY_DATA.map(item=>total+= item.productQuantity*item.productPrice)
        expect(getByTestId("total")).toHaveTextContent(total)
        
    })
   
})