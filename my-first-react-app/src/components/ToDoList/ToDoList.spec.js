import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList.js';

test('renders Heading', () => {
  render(<ToDoList text="Yet Another Todo List!"/>);
  expect(screen.getByText("Yet Another Todo List!")).toBeInTheDocument();
});