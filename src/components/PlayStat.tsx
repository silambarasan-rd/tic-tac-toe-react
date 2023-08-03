import React from "react";
import "./PlayStat.scss";
import { PLAYERS } from "../provider/constants";

const PlayStat = ({ playerIndex }: { playerIndex: number }) => {
    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <h2>Current Player: { PLAYERS[playerIndex] }</h2>
        </div>
    )
}

export default PlayStat;
