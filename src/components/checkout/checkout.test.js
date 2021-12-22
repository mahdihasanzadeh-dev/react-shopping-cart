import { 
    Checkout,
    Heading, 
    ShoppingCartItems,
    Bill } from '..'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<Checkout />',()=>{
    it('renders component props of Checkout component',()=>{
        const wrapper = shallow(<Checkout  />)
        expect(wrapper.find(Heading)).toHaveLength(1)
        expect(wrapper.find(ShoppingCartItems)).toHaveLength(1)
        expect(wrapper.find(Bill)).toHaveLength(1)
    })
})