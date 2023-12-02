import {render, screen,waitFor,act} from '@testing-library/react'


import UserFetcher from './UserFetcher'



global.fetch = jest.fn()

beforeEach(()=> {
    fetch.mockClear()
})

test('displays loading state initially', async ()=>{
    fetch.mockImplementationOnce(()=> new Promise(resolve => {
        setTimeout(()=> resolve({json: ()=> Promise.resolve({name: 'John Doe'})}),100)
    }))

    render(<UserFetcher userId={1}/> )

    await waitFor(()=>{
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

})


test('displays loading state initially', async ()=>{

    fetch.mockImplementationOnce(()=>  Promise.resolve( {
        ok:true,
        json: ()=> Promise.resolve({name: 'John Doe'})
    }));


    await act(async ()=> {
        render(<UserFetcher userId={1}/> )

    }) 

    await waitFor(()=>{
        expect(screen.getByText('User Name: John Doe')).toBeInTheDocument()
    })

})


test('displays error message if the fetch fails', async ()=>{

    fetch.mockImplementationOnce(()=>  Promise.reject(new Error('Failed to fetch')));


    await act(async ()=> {
        render(<UserFetcher userId={1}/> )

    }) 

    await waitFor(()=>{
        expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument()
    })

})