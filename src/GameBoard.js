import './Board.css'; 

const GameBoard = () => {

    const renderRow = () => (
        <div role="row" className="board-row">
            <button className="board-button"></button>
            <button className="board-button"></button>
            <button className="board-button"></button>
        </div>
    );

    return (
        <div role="grid">
            {renderRow()}
            {renderRow()}
            {renderRow()}
        </div>
    );
};

export default GameBoard;
