import { DUMMY_DATA } from '../../data/DUMMY_DATA';
import ShoppingCartContextProvider,{ShoppingCartContext} from '../../context/shopping-cart-context'
import { fireEvent, render } from "@testing-library/react";

describe('<ShoppingCartItem/>',()=>{
    it('Functionality',()=>{
        const {getByText,getByTestId} =render(
            <ShoppingCartContextProvider>
                <ShoppingCartContext.Consumer>
                    {
                        (context)=>(
                            <div >
                                <div                
                                    onClick={()=>context.decreaseQuantity(DUMMY_DATA[0].productId)}
                                >decreaseQuantity</div>
                                <div data-testid="quantity">{DUMMY_DATA[0].productQuantity}</div>
                                <div                
                                    onClick={()=>context.addQuantity(DUMMY_DATA[0].productId)}
                                >addQuantity</div>
                                 <span data-testid="price">{(DUMMY_DATA[0].productPrice * DUMMY_DATA[0].productQuantity).toFixed(2)}</span>
                            </div>
                        )
                    }
                </ShoppingCartContext.Consumer>
            </ShoppingCartContextProvider>
        )
        fireEvent.click(getByText("decreaseQuantity"))
        expect(getByTestId("quantity")).toHaveTextContent("0")
        expect(getByTestId("price")).toHaveTextContent("0")
        fireEvent.click(getByText("addQuantity"))
        expect(getByTestId("quantity")).toHaveTextContent("1")
        expect(getByTestId("price")).toHaveTextContent("10.50")
    })
   
})