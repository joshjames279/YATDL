import { render, screen } from '@testing-library/react';
import ToDoDomain from './ToDoDomain.js';

test('renders list', () => {
  render(<ToDoDomain />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});