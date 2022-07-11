import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleMenu() {
  const [formats, setFormats] = React.useState();

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const items = ["Person", "Movies", "Vehicles", "Species"];

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      {items.map((item) => {
        return <ToggleButton value={item}> {item} </ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
}
