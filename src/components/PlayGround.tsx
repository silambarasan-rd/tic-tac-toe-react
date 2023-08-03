import React, { useEffect, useState } from "react";
import PlayStat from "./PlayStat";
import PlayGrid from "./PlayGrid";
import PlayActions from "./PlayActions";
import "./PlayGround.scss";
import { DEFAULT_COLS, GAME_NOT_STARTED, DEFAULT_PLAYER, GAME_COMPLETED, GAME_DRAW, GAME_IN_PROGRESS, PLAYERS, WINNING_CONSTRAINT, findSpot } from "../provider/constants";
import { Modal } from "react-bootstrap";

const PlayGround = () => {

    const [colStat, setColStat] = useState(DEFAULT_COLS);
    const [currentPlayer, setCurrentPlayer] = useState(DEFAULT_PLAYER);
    
    const [gameStatus, setGameStatus] = useState(GAME_NOT_STARTED);

    const onUserPlay = (rowIndex: number, colIndex: number) => {
        setColStat((prevStat) => {
            prevStat[findSpot(rowIndex, colIndex)] = PLAYERS[currentPlayer];

            return [...prevStat];
        });
    };

    useEffect(() => {
        if (colStat.every(r => r === null)) {
            return;
        }

        // Calculate the Game Status
        for (let i=0; i < WINNING_CONSTRAINT.length; i++) {
            const currConstraint = WINNING_CONSTRAINT[i];

            const BOX_1 = colStat[currConstraint[0]];
            const BOX_2 = colStat[currConstraint[1]];
            const BOX_3 = colStat[currConstraint[2]];
            
            if (BOX_1 === null || BOX_2 === null || BOX_3 === null) {
                continue;
            }

            if (BOX_1 === BOX_2 && BOX_2 === BOX_3) {
                // CURRENT PLAYER WINS
                setGameStatus(GAME_COMPLETED);
                return;
            }
        }

        // Check if it's draw
        if (!colStat.includes(null)) {
            setGameStatus(GAME_DRAW);
            return;
        }

        // If not win or draw, just keep the game in-progress
        setGameStatus(GAME_IN_PROGRESS);
        setCurrentPlayer((player: number) => {
            if (player) return 0;

            return 1;
        });
    }, [colStat]);

    const resetGame = () => {
        setGameStatus(GAME_NOT_STARTED);
        setCurrentPlayer(DEFAULT_PLAYER);
        setColStat((prevColStat) => [...prevColStat.fill(null)]);
    };

    const onDismissAlert = () => {
        resetGame();
    }

    return (
        <div className="playground">
            <Modal show={gameStatus === GAME_COMPLETED || gameStatus === GAME_DRAW} onHide={onDismissAlert}>
                <Modal.Header className="justify-content-center">
                    {
                        gameStatus === GAME_COMPLETED ? 
                            <Modal.Title>Woohoo! Game Finished 🥳</Modal.Title> :
                                <Modal.Title>No one Wins! 🫣</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    {
                        gameStatus === GAME_COMPLETED ? 
                            <h2 className="text-center">👉🏻 `{PLAYERS[currentPlayer]}` won the match 🤙🏻</h2> :
                                <h2 className="text-center">🤜🏻 Match ends with draw 🤝</h2>
                    }
                    
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button type="button" onClick={onDismissAlert} className="btn btn-primary rounded-0">Ok</button>
                </Modal.Footer>
            </Modal>

            <PlayStat playerIndex={currentPlayer} />
            <PlayGrid columnStat={colStat} onStatChange={(row: number, col: number) => onUserPlay(row, col)} />
            <PlayActions status={gameStatus} onResetClicked={resetGame} />
        </div>
    )
}

export default PlayGround;
