import React from "react";
import "../players-info/PlayersInfo.css";
import SinglePlayer from "./single-player/SinglePlayer";
export default function PlayersInfo(props) {
  const players = props.players;
  return (
    <div className="player-info overflow-hidden">
      <h1 className="mb-4">All Players List:</h1>
      <div className="row">
        {players.map((player) => (
          <SinglePlayer
            playerData={player}
            selectPlayer={props.selectPlayer}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
}
