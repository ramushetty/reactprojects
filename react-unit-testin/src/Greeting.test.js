// Greeting.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message with name', () => {
  render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});

test('renders default greeting when no name is provided', () => {
  render(<Greeting />);
  expect(screen.getByText('Hello, Guest!')).toBeInTheDocument();
});


it('renders correctly with a name', () => {
    const { asFragment } = render(<Greeting name="John" />);
    expect(asFragment()).toMatchSnapshot();
  });
  
it('renders correctly without a name', () => {
const { asFragment } = render(<Greeting />);
expect(asFragment()).toMatchSnapshot();
});



