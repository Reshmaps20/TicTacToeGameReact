import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameBoard from './GameBoard';

describe('GameBoard Component', () => {
    beforeEach(() => {
        render(<GameBoard />);
    });

    test('renders a 3x3 grid layout for the game board', () => {

        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(3);
        rows.forEach(row => {
            const buttons = row.querySelectorAll('button');
            expect(buttons).toHaveLength(3);
        })
    })

    test('renders exactly 9 square buttons and verify that the buttons are clickable', () => {

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(9);
    })

    test('initially renders the squares with empty values', () => {

        const squares = screen.getAllByRole('button');
        expect(squares).toHaveLength(9);
        squares.forEach(square => {
            expect(square.textContent.trim()).toBe('');
        })
    })

    test('renders the title "Tic Tac Toe Game" at the top of the game board', () => {

        const titleElement = screen.getByText(/Tic Tac Toe Game/i);
        expect(titleElement).toBeInTheDocument();
        const rows = screen.getAllByRole('row');
        const boardElement = rows[0];
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.compareDocumentPosition(boardElement) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    })

    test('each square button should displays "X" initially when clicked', () => {

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(buttons[0]).toHaveTextContent('X');
        fireEvent.click(buttons[0]);
        expect(buttons[0]).toHaveTextContent('X');
    })

    test('each square button is clickable and changes its value to "X" or "O"', () => {

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(buttons[0]).toHaveTextContent('X');
        fireEvent.click(buttons[1]);
        expect(buttons[1]).toHaveTextContent('O');
    })

    test('status of next player after a move should be displayed in the screen', () => {

        const statusElement = screen.getByText(/Next player:/i);
        expect(statusElement).toHaveTextContent('Next player: X');
        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(statusElement).toHaveTextContent('Next player: O');
        fireEvent.click(buttons[1]);
        expect(statusElement).toHaveTextContent('Next player: X');
    })

    test('clicking on a square that already has a value does not change the value', () => {

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(buttons[0]).toHaveTextContent('X');
        fireEvent.click(buttons[0]);
        expect(buttons[0]).toHaveTextContent('X');
        fireEvent.click(buttons[1]);
        expect(buttons[1]).toHaveTextContent('O');
    })

})
