import {render, screen,fireEvent} from '@testing-library/react'


import Counter from './Counter'
import { Greeting } from './Greeting'

test('inital counter value is 0', ()=>{
    render(<Counter/>)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
})



test('counter increments when button is clicked', ()=>{
    render(<Counter/>)
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

})


test('counter increments when button is clicked', ()=>{
    render(<Counter/>)
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

})


// Negative test case
test('counter does not increment without button click', ()=>{
    render(<Counter/>)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()

    setTimeout(()=>{
        expect(screen.getByText('Count: 0')).toBeInTheDocument()
    }, 1000)
})


