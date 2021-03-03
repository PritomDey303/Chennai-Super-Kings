import React from "react";
import "./PlayerSelection.css";
import SingleSelectedPlayer from "./single-selected-player/SingleSelectedPlayer";
export default function PlayerSelection(props) {
  const selectedPlayers = props.selectedPlayer;

  let total = selectedPlayers.reduce((sum, player) => sum + player.salary, 0);

  return (
    <div className="player-selection pl-2 mt-3">
      <h3 className="text-dark">
        Select Your Dream 11:({selectedPlayers.length} Selected)
      </h3>
      <h4>Total Worth: ${total}</h4>

      {selectedPlayers.map((data) => (
        <SingleSelectedPlayer
          selectedPlayers={data}
          deselectPlayer={props.deselectPlayer}
        ></SingleSelectedPlayer>
      ))}
    </div>
  );
}
