import { render, screen } from '@testing-library/react';
import InputField from './InputField.js';

test('renders an input field', () => {
  render(<InputField />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});