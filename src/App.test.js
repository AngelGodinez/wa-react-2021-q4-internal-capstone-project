import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar title', () => {
  render(<App />);
  const title = screen.getByText(/THE SHOP/i);
  expect(title).toBeInTheDocument();
});
