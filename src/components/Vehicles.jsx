import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useStore } from "../store/dataStore";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const vehicles = useStore((state) => state.vehicles);
  const fetchVehicle = useStore((state) => state.fetchVehicle);


  const [expanded, setExpanded] = React.useState(0);


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    fetchVehicle();
  }, [fetchVehicle]);

  return (
    <Box
      padding={0}
      sx={{
        maxWidth: "50%",
      }}
    >
      {vehicles.map((vehicle, i) => {
        return (
          <Accordion
            key={i}
            expanded={expanded === i}
            onChange={handleChange(i)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Typography>{vehicle.name} </Typography>
                <Chip variant="outlined" label={vehicle.vehicle_class} />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{vehicle.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
