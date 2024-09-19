import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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

test('renders the title "Tic Tac Toe Game" at the top of the game board', () => {
    
    render(<GameBoard />);
    const titleElement = screen.getByText(/Tic Tac Toe Game/i);
    expect(titleElement).toBeInTheDocument();
    const rows = screen.getAllByRole('row');
    const boardElement = rows[0];
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.compareDocumentPosition(boardElement) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });
