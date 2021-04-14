import { render, screen } from '@testing-library/react';
import ToDoDomain from './ToDoDomain.js';
import userEvent from '@testing-library/user-event'

test('renders list', () => {
  render(<ToDoDomain />)
  userEvent.type(screen.getByRole('textbox'),'random task')
  userEvent.click(screen.getByRole('button'))
  
  expect(screen.getByText("random task")).toBeInTheDocument();
});

test('renders list of multiple items', () => {
  render(<ToDoDomain />)
  userEvent.type(screen.getByRole('textbox'),'random task')
  userEvent.click(screen.getByRole('button'))
  userEvent.clear(screen.getByRole('textbox'))
  userEvent.type(screen.getByRole('textbox'),'another task')
  userEvent.click(screen.getByRole('button'))
  
  expect(screen.getByText("random task")).toBeInTheDocument();
  expect(screen.getByText("another task")).toBeInTheDocument();
});

test('clears list of multiple items', () => {
  render(<ToDoDomain />)
  userEvent.type(screen.getByRole('textbox'),'random task')
  userEvent.click(screen.getByRole('button'))
  userEvent.clear(screen.getByRole('textbox'))
  userEvent.type(screen.getByRole('textbox'),'another task')
  userEvent.click(screen.getByRole('button'))

  const element = screen.getByText("random task")
  const element2 = screen.getByText("another task")

  userEvent.click(screen.getByRole('link'))
  
  expect(element).not.toBeInTheDocument();
  expect(element2).not.toBeInTheDocument();
});
