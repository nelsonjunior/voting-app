import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";
import Menu from "./Menu";

const logo = require("../../assets/images/logo.png");

const styles = (theme) => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `2px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white",
    overflow: 'hidden',
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  inline: {
    display: "inline",
  },
  horizontalline: {
    display: "flex",
    alignItems: "center",
    paddingRight: 20,
    borderRight: `1px solid ${theme.palette.grey["A100"]}`,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  propertiesHeaderContainer: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    textAlign: "right",
    justifyContent: "center",
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em",
    },
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
});

class NavBar extends React.Component {
  state = {
    value: 0,
    menuDrawer: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
    if (this.props.currentPath === "/dashboard") {
      return 1;
    }
    if (this.props.currentPath === "/signup") {
      return 2;
    }
    if (this.props.currentPath === "/wizard") {
      return 3;
    }
    if (this.props.currentPath === "/cards") {
      return 4;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.horizontalline}>
                <Link to="/" className={classes.link}>
                  <img height={40} src={logo} alt="Logo Voting App" />
                </Link>
              </div>

              {!this.props.noTabs && (
                <React.Fragment>
                  <div className={classes.iconContainer}>
                    <IconButton
                      onClick={this.mobileMenuOpen}
                      className={classes.iconButton}
                      color="inherit"
                      aria-label="Menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer
                      anchor="right"
                      open={this.state.menuDrawer}
                      onClose={this.mobileMenuClose}
                      onOpen={this.mobileMenuOpen}
                    >
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || this.state.value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search,
                                }
                          }
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                    </Tabs>
                  </div>
                </React.Fragment>
              )}
              <div className={classes.propertiesHeaderContainer}>
                <Typography variant="caption">
                  Material.io/Guidelines/Components
                </Typography>
                <Typography variant="caption">Version .5.22</Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(NavBar));
