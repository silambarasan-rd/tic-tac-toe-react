import React from "react";
import "./PlayGrid.scss";
import { GRID_SIZE, PLAYERS, findSpot } from "../provider/constants";

const PlayGrid = ({ columnStat, onStatChange }: { columnStat: any[], onStatChange: Function }) => {

    const GridCol = ({ rowIndex, colIndex }: { rowIndex: number, colIndex: number }) => {
        const currentPlayer = columnStat[findSpot(rowIndex, colIndex)];

        let played = false;
        if (currentPlayer !== null) {
            played = true;
        }

        const onColClick = () => {
            if (played) return;

            onStatChange(rowIndex, colIndex);
        };

        return (<div className={`grid-col${played ? ' played' : ''}`} onClick={() => onColClick()}>
            {
                currentPlayer ? (
                    <span className={`player-mark${currentPlayer === PLAYERS[0] ? ' player-one' : ' player-two'}`}>
                        {currentPlayer}
                    </span>
                ) : null
            }
        </div>)
    };

    const GridRow = ({ rowIndex }: { rowIndex: number }) => {
        return (
            <div className="grid-row">
                {
                    Array.from({length: GRID_SIZE}).map((row, index) => (
                        <GridCol rowIndex={rowIndex} colIndex={index} key={`col_${index}`} />
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
                        <GridRow rowIndex={index} key={`row_${index}`} />
                    ))
                }
            </div>
        </div>
    );
};

export default PlayGrid;
