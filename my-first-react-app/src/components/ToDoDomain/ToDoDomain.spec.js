import { render, screen } from '@testing-library/react';
import ToDoDomain from './ToDoDomain.js';
import userEvent from '@testing-library/user-event'

test('renders list', () => {
  render(<ToDoDomain />)
  userEvent.type(screen.getByRole('textbox'),'random task')
  userEvent.click(screen.getByRole('button'))
  const element = screen.getByText("random task")
  expect(element).toBeInTheDocument();
});
