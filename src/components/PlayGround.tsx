import React from "react";
import PlayStat from "./PlayStat";
import PlayGrid from "./PlayGrid";
import PlayActions from "./PlayActions";
import "./PlayGround.scss";

const PlayGround = () => {
    return (
        <div className="playground">
            <PlayStat />
            <PlayGrid />
            <PlayActions />
        </div>
    )
}

export default PlayGround;
