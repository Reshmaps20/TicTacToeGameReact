import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

test('renders a 3x3 grid layout for the game board', () => {

    render(<GameBoard />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    rows.forEach(row => {
        const buttons = row.querySelectorAll('button');
        expect(buttons).toHaveLength(3);
    })
})