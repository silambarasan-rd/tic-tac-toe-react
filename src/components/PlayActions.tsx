import React from "react";
import "./PlayActions.scss";
import { GAME_NOT_STARTED } from "../provider/constants";

const PlayActions = ({ status, onResetClicked }: { status: number, onResetClicked: Function }) => {

    if (status === GAME_NOT_STARTED) {
        return null;
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <button type="button" onClick={() => onResetClicked()} className="btn btn-danger rounded-0">Reset</button>
        </div>
    )
}

export default PlayActions;
