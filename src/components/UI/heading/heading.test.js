import { Heading } from "..";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
it('renders <Heading />',()=>{
    const {getByTestId} = render(<Heading title="hello" />)
    expect(getByTestId('h2tag')).toHaveTextContent('hello')
})