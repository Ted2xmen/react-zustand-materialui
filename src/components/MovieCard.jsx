import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MovieCard({ movie }) {
  const data = false; // movie

  return (
    <Grid item>
      <Item elevation={0}>
        <Card sx={{ maxWidth: 330 }}>
          {data ? (
            <CardMedia
              component="img"
              height="140"
              image={movie.image}
              alt={movie.title}
            />
          ) : (
            <>
              <Skeleton variant="rectangular" width={330} height={140} />
            </>
          )}
          <CardContent>
            <Stack paddingBottom={1} direction="row" spacing={1}>
              {data ? (
                <Chip label={movie.director} variant="outlined" />
              ) : (
                <Skeleton width={50} height={40} />
              )}
              {data ? (
                <Chip
                  label={movie.release_date}
                  color="success"
                  variant="outlined"
                />
              ) : (
                <Skeleton width={50} height={40} />
              )}
            </Stack>
            {data ? (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography gutterBottom component="p">
                  {movie.original_title}
                </Typography>
              </>
            ) : (
              <>
                <Skeleton />
                <Skeleton />
              </>
            )}
            <Typography variant="body2" color="text.secondary">
              {data ? movie.description.slice(0, 200) + "..." : <Skeleton />}
            </Typography>
          </CardContent>
          <CardActions>
            {data ? (
              <Button size="small">{movie.id}</Button>
            ) : (
              <Skeleton variant="string" width={330} height={30} />
            )}
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
}
