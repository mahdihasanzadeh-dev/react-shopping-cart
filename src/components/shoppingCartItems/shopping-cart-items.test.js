import {DUMMY_DATA} from '../../data/DUMMY_DATA'
import {
    ShoppingCartItems, 
    ShoppingCartItem
} from '../index'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<ShoppingCartItems />',()=>{
    it('renders number of ShoppingCartItem component',()=>{
        const wrapper = shallow(<ShoppingCartItems items={DUMMY_DATA} />)
        expect(wrapper.find(ShoppingCartItem)).toHaveLength(DUMMY_DATA.length)
    })
})