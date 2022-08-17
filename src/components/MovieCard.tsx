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
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MovieCard({ movie }: any) {
  const data = true; // movie

  const navigate = useNavigate();

  return (
    <Grid item sm={5} md={4} lg={3}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
            <CardActions style={{ justifyContent: "end" }}>
              {data ? (
                <Button
                  onClick={() => navigate(`details/${movie.id}`)}
                  size="small"
                  variant="outlined"
                >
                  Details
                </Button>
              ) : (
                <Skeleton variant="string" width={330} height={30} />
              )}
            </CardActions>
          </Card>
        </Item>
      </motion.div>
    </Grid>
  );
}
