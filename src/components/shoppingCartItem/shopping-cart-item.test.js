
import ShoppingCartContextProvider from '../../context/shopping-cart-context'
import {
    ShoppingCart
} from '../index'
import { mount, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
const wrapper = mount(
    <ShoppingCartContextProvider >
        <ShoppingCart />
  </ShoppingCartContextProvider>
)
describe('<ShoppingCartItem />',()=>{
    it('increment quantity item',()=>{
     
        wrapper.find("div.alt").first().simulate("click");
      
    })
})