import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import QuestionAnswerTwoToneIcon from "@material-ui/icons/QuestionAnswerTwoTone";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InfoIcon from "@material-ui/icons/Info";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Nav } from "react-bootstrap";
import useStyles from "./Styles";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";
import fire from "../../config/firebase";
import { Button } from "antd";
import logo from "../../assets/favicon.png";

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
        cogoToast.success("User Logged Out Successfully");
      });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemsList1 = [
    {
      text: "Raise a Question",
      icon: <QuestionAnswerTwoToneIcon />,
      onClick: () => history.push("/askquestion"),
    },
    {
      text: "Bookmark",
      icon: <GradeTwoToneIcon />,
      onClick: () => history.push("/askquestion"),
    },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
  ];

  const itemsList2 = [
    {
      text: "All Questions",
      icon: <AllInboxOutlinedIcon />,
      onClick: () => history.push("/allquestions"),
    },
    {
      text: "Contact Us",
      icon: <RecentActorsOutlinedIcon />,
      onClick: () => history.push("/contact"),
    },
    {
      text: "Account Details",
      icon: <AccountCircleIcon />,
      onClick: () => history.push("/profile"),
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img alt="logo" src={logo} height="30px" />
            <Typography
              variant="h6"
              display="inline"
              style={{ marginLeft: "10px", borderBottom: "solid" }}
            >
              Say-It-Safe
            </Typography>
          </Typography>
          <Nav.Link>
            <Button
              style={{
                width: "100px",
                height: "30px",
                fontSize: "16px",
                float: "right",
                marginLeft: "1450px",
              }}
              type="primary"
              danger
              onClick={logout}
            >
              <AccountCircleIcon /> Logout
            </Button>
          </Nav.Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemsList1.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {itemsList2.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>Welcome to SAY-IT-SAFE</Typography>
        <Typography paragraph>You Are Logged In...!!!</Typography> */}
      </main>
    </div>
  );
};

export default Dashboard;
