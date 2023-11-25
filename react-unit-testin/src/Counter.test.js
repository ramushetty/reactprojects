// Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('initial counter value is 0', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('counter increments when button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});


test('counter increments multiple times when button is clicked multiple times', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });


// Optional: Negative Test Case
test('counter does not increment without button click', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    // Simulate some time passing without clicking
    setTimeout(() => {
      expect(screen.getByText('Count: 0')).toBeInTheDocument();
    }, 1000);
  });
