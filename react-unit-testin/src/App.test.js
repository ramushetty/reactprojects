import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('sample', () => {
//   expect(true).toBe(true)
// });

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

