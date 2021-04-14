import { render, screen } from '@testing-library/react';
import Linethrough from './linethrough.js';
import userEvent from '@testing-library/user-event'

test('has a checkbox that strikesthrough when clicked', function(){
    render(<Linethrough text="help"/>);

    userEvent.click(screen.getByRole('checkbox'))

    expect(screen.getByText("help")).toHaveStyle({textDecoration: 'line-through'})
})