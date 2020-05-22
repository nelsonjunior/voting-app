import React from "react";
import "./App.css";
import "typeface-roboto";
import Routes from "./routes";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import { blue, indigo } from "@material-ui/core/colors";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.grey["100"],
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
