import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useStore } from "../store/dataStore";
import { useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, Stack, Chip, Typography } from "@mui/material";
import React from "react";

interface Props {
  detail: object;
  title: string | object;
  image: string;
  director: string;
  release_date: string | number;
  description: string;
  original_title: string;
}

const Details: React.FC<Props> = () => {
  const { id } = useParams();

  const detail = useStore((state) => state.detail);
  const fetchDetail = useStore((state) => state.fetchDetail);

  useEffect(() => {
    fetchDetail(id);
    console.count();
  }, [fetchDetail, id]);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box
          sx={{ justifyContent: "center", gap: 3 }}
          display="flex"
          flexWrap="wrap"
          justifyItems="center"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography component="h1" variant="h2" paddingY={1}>
            {detail.title}
          </Typography>
          <CardMedia
            component="img"
            height="300"
            style={{ objectFit: "contain" }}
            image={detail.image}
            alt={detail.title}
            loading="lazy"
          />
          <Stack direction="row" spacing={2} paddingY={2}>
            <Chip label={detail.director} variant="outlined" />
            <Chip label={detail.release_date} variant="outlined" />
          </Stack>
          <Typography paddingX={2} component="p" variant="p" paddingY={1}>
            {detail.original_title}
          </Typography>
        </Box>
        <Typography component="h4" variant="h6" paddingBottom={5}>
          {detail.description}
        </Typography>
      </Container>
    </>
  );
};

export default Details;
