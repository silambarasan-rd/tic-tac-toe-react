import React from "react";
import "./PlayActions.scss";

const PlayActions = () => {
    return (
        <div className="d-flex flex-row justify-content-center">
            <button type="button" className="btn btn-outline-primary rounded-0 me-1">Play Again</button>
            <button type="button" className="btn btn-danger rounded-0">Reset</button>
        </div>
    )
}

export default PlayActions;
