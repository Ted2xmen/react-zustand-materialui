import { Box, Button, Divider, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box
      paddingTop={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <img
        src="https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
        alt="logo"
        width={550}
      />
      <ButtonGroup variant="" aria-label="outlined primary button group">
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/people")}>People</Button>
        <Button>Github</Button>
      </ButtonGroup>
      <Divider />
    </Box>
  );
}
