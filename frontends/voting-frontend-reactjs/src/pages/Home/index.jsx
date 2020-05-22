import React from "react";
import { makeStyles, Grid, CssBaseline } from "@material-ui/core";
import VoteCard from "./components/VoteCard";
import NavBar from "../../shared/components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: 1200,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar currentPath="Teste" />
      <div className={classes.root}>
        <Grid container justify="center" >
          <Grid
            spacing={4}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <VoteCard />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
