import {
    ShoppingCart, 
    Checkout,
    Payment
} from '../index'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<ShoppingCart />',()=>{
    it('renders component props of ShoppingCart component',()=>{
        const wrapper = shallow(<ShoppingCart  />)
        expect(wrapper.find(Checkout)).toHaveLength(1)
        expect(wrapper.find(Payment)).toHaveLength(1)
    })
})