import { render, screen } from '@testing-library/react';
import SubmitButton from './submit.js';

test('renders Heading', () => {
  render(<SubmitButton />);
  expect(screen.getByText("Save")).toBeInTheDocument();
});