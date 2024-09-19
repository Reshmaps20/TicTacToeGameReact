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

test('renders exactly 9 square buttons and verify that the buttons are clickable', () => {

    render(<GameBoard />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(9);
})

test('initially renders the squares with empty values', () => {

    render(<GameBoard />);
    const squares = screen.getAllByRole('button');
    expect(squares).toHaveLength(9);
    squares.forEach(square => {
        expect(square.textContent.trim()).toBe('');
    })
})