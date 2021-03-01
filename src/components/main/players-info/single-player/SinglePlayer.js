import {
  faHandPointRight,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SInglePlayer(props) {
  const handPoint = (
    <FontAwesomeIcon icon={faHandPointRight} className="text-dark mr-1" />
  );
  const {
    name,
    position,
    batting,
    bowling,
    nationality,
    image,
    salary,
  } = props.playerData;
  return (
    <div className="col-md-4 mb-5">
      <div className="card bg-warning shadow" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item pl-4">
            {handPoint}
            <strong className="text-warning">Position: </strong>
            {position}
          </li>
          <li className="list-group-item pl-4">
            {handPoint}
            <strong className="text-warning">Batting: </strong>
            {batting}
          </li>
          <li className="list-group-item pl-4">
            {handPoint}
            <strong className="text-warning">Bowling: </strong>
            {bowling}
          </li>
          <li className="list-group-item pl-4">
            {handPoint}
            <strong className="text-warning">Nationality: </strong>
            {nationality}
          </li>
          <li className="list-group-item pl-4">
            {handPoint}
            <strong className="text-warning">Salary: </strong>${salary}
          </li>
        </ul>
        <button
          className="card-body pl-4 btn btn-warning"
          onClick={() => props.selectPlayer(props.playerData)}
        >
          <strong>ADD TO SQUAD</strong>
          <FontAwesomeIcon
            icon={faPlusCircle}
            style={{ fontSize: "20px", margin: "0px 0px -2px 5px" }}
          />
        </button>
      </div>
    </div>
  );
}
