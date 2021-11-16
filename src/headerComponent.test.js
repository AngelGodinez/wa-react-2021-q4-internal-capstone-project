import { render, screen } from '@testing-library/react';
import HeaderComponent from './header.component';

test('renders learn react link', () => {
  render(<HeaderComponent />);
  const brandName = screen.getByText(/THE SHOP/i);
  expect(brandName).toBeInTheDocument();
});