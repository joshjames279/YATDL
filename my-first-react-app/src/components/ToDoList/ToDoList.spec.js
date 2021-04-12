import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList.js';

test('renders Heading', () => {
  render(<ToDoList />);
  expect(screen.getByText("Yet Another Todo List!")).toBeInTheDocument();
});