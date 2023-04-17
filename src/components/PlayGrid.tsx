import React from "react";
import "./PlayGrid.scss";

const GRID_SIZE = 3;
const PLAYERS = ['X', 'O'];

const PlayGrid = () => {

    const GridCol = () => {
        const currentPlayer = PLAYERS[Math.round(Math.random())];
        const played = true;

        return (<div className={`grid-col${played ? ' played' : ''}`}>
            <span className={`player-mark${currentPlayer === PLAYERS[0] ? ' player-one' : ' player-two'}`}>
                {currentPlayer}
            </span>
        </div>)
    };

    const GridRow = () => {
        return (
            <div className="grid-row">
                {
                    Array.from({length: GRID_SIZE}).map((row, index) => (
                        <GridCol key={`col_${index}`} />
                    ))
                }
            </div>
        )
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="grid-wrapper">
                {
                    Array.from({length: GRID_SIZE}).map((row, index) => (
                        <GridRow key={`row_${index}`} />
                    ))
                }
            </div>
        </div>
    );
};

export default PlayGrid;
