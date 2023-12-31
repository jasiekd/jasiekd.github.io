import * as React from "react";
import "../styles/MatchScheduleTitle.css";
import "../styles/MainStyle.css";
import { useNavigate } from "react-router-dom";

export default function MatchScheduleTitle({ id, name, season, date }) {
  const navigate = useNavigate();

  return (
    <div className="leagueS">
      <div className="title">{name}</div>
      <div
        className="leagueTable"
        onClick={() => navigate(`/leagueTable/${season}/${id}/${date}`)}
      >
        Zobacz tabelę
      </div>
    </div>
  );
}
