import {
    Payment, 
    Heading,
    CardType,
    CardInfo
} from '../index'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<Payment />',()=>{
    it('renders component props of Payment component',()=>{
        const wrapper = shallow(<Payment  />)
        expect(wrapper.find(Heading)).toHaveLength(1)
        expect(wrapper.find(CardType)).toHaveLength(1)
        expect(wrapper.find(CardInfo)).toHaveLength(1)
    })
})