import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../single-selected-player/SingleSelectedPlayer.css";
export default function singleSelectedPlayer(props) {
  const timesCircle = (
    <FontAwesomeIcon icon={faTimesCircle} className="text-danger mr-1" />
  );
  const { name, salary } = props.selectedPlayers;
  console.log(props);
  return (
    <div className="mt-4">
      <div className="player text-dark shadow">
        {name} (<small>Worth: ${salary}</small>)
      </div>
    </div>
  );
}
