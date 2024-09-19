
const GameBoard = () => {

    const renderRow = () => (
        <div role="row" style={{ display: 'flex' }}>
            <button style={{ width: '50px', height: '50px', margin: '5px' }}></button>
            <button style={{ width: '50px', height: '50px', margin: '5px' }}></button>
            <button style={{ width: '50px', height: '50px', margin: '5px' }}></button>
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
