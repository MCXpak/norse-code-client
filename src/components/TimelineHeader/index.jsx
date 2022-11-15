import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "./index.css";

const TimelineHeader = ({ handleCheckAnswer }) => {
  return (
    <div className="header-container">
      <div className="top-buttons">
        <Button>
          <QuestionMarkIcon></QuestionMarkIcon>
        </Button>
        <Button>
          <RestartAltIcon></RestartAltIcon>
        </Button>
        <Button>
          <HighlightOffIcon></HighlightOffIcon>
        </Button>
      </div>
      <Typography sx={{ color: "white" }}>
        Place the cards in the correct order on the timeline
      </Typography>
      <Button onClick={handleCheckAnswer}>Check Answer</Button>
    </div>
  );
};

export default TimelineHeader;
