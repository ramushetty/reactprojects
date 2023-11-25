// UserFetcher.test.js
import React from 'react';
import { render, screen, waitFor,act } from '@testing-library/react';


// import UserFetcher from './UserFetcher';
import UserFetcher from './ UserFetcher';

// Mock global fetch function
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('displays loading state initially', async () => {
//   fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve({ name: 'John Doe' }) }));
// //   render(<UserFetcher userId={1} />);
//     // await act(async () => {
//     //     render(<UserFetcher userId={1} />);
//     // });
//     await waitFor(() => {
//   expect(screen.getByText('Loading...')).toBeInTheDocument();
//     })

// Mock the fetch call
fetch.mockImplementationOnce(() => new Promise(resolve => {
    setTimeout(() => resolve({ json: () => Promise.resolve({ name: 'John Doe' }) }), 100);
  }));

  // Render the component
  render(<UserFetcher userId={1} />);

  // Wait for the "Loading..." text to appear
  await waitFor(() => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Optionally, wait for the fetch to resolve and check for the final state
//   await waitFor(() => {
//     expect(screen.getByText('User Name: John Doe')).toBeInTheDocument();
//   });
});

test('displays user data after successful fetch', async () => {
  fetch.mockImplementationOnce(() => Promise.resolve({ 
    ok: true, 
    json: () => Promise.resolve({ name: 'John Doe' }) 
  }));

//   render(<UserFetcher userId={1} />);
await act(async () => {
    render(<UserFetcher userId={1} />);
  });
  await waitFor(() => expect(screen.getByText('User Name: John Doe')).toBeInTheDocument());
});

test('displays error message if the fetch fails', async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error('Failed to fetch')));

//   render(<UserFetcher userId={1} />);
await act(async () => {
    render(<UserFetcher userId={1} />);
  });
  await waitFor(() => expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument());
});
