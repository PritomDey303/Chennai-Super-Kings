import React, { useEffect, useState } from "react";
import playersData from "../../playersData/PlayersData";
import "./Main.css";
import PlayerSelection from "./player-selection/PlayerSelection";
import PlayerInfo from "./players-info/PlayersInfo";

export default function Main() {
  //useState Hook
  const [Players, setPlayers] = useState([]);
  const [SelectedPlayer, setSelectedPlayer] = useState([]);
  //useEffect Hook
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const selectPlayer = (data) => {
    if (SelectedPlayer.length === 11) {
      alert("Your Squad is full.");
    } else {
      if (SelectedPlayer.indexOf(data) === -1) {
        setSelectedPlayer([...SelectedPlayer, data]);
      } else {
        alert(data.name + " " + "is already added.");
      }
    }
  };

  return (
    <div className="main py-5">
      <div className="container-fluid d-flex">
        <PlayerInfo players={Players} selectPlayer={selectPlayer}></PlayerInfo>
        <PlayerSelection selectedPlayer={SelectedPlayer}></PlayerSelection>
      </div>
    </div>
  );
}
