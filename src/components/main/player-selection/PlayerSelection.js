import React from "react";
import "./PlayerSelection.css";
import SingleSelectedPlayer from "./single-selected-player/SingleSelectedPlayer";
export default function PlayerSelection(props) {
  const selectedPlayers = props.selectedPlayer;
  let total = 0;
  for (let i = 0; i < selectedPlayers.length; i++) {
    total = total + selectedPlayers[i].salary;
    console.log(total);
  }
  console.log(total);
  return (
    <div className="player-selection pl-2 mt-3">
      <h3 className="text-dark">
        Select Your Dream 11:({selectedPlayers.length} Selected)
      </h3>
      <h4>Total Worth: ${total}</h4>

      {selectedPlayers.map((data) => (
        <SingleSelectedPlayer selectedPlayers={data}></SingleSelectedPlayer>
      ))}
    </div>
  );
}
