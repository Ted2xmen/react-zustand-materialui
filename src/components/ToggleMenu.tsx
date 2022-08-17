import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useStore } from "../store/dataStore";

export default function ToggleMenu() {
  const [formats, setFormats] = React.useState();
  const setCategory = useStore((state) => state.setCategory);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    setCategory(formats);
  };

  const items = [
    { name: "Director", value: "director" },
    { name: "Movies", value: "title" },
  ];

  return (
    <ToggleButtonGroup
      value={formats}
      exclusive
      onChange={handleFormat}
      aria-label="text formatting"
    >
      {items.map((item, i) => {
        return (
          <ToggleButton key={i} value={item.value}>
            {item.name}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
