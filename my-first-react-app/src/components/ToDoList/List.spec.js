import { render, screen } from '@testing-library/react';
import List from './List.js';

test('renders list', () => {
  render(<List />);
  expect(screen.queryByTestId('data-testid-attribute-value')).not.toBeInTheDocument();
});