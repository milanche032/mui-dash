import React from "react";
import { makeStyles } from "@mui/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";

const useStyles = makeStyles({
  topbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "#fff",
    position: "sticky",
    top: "0",
    zIndex: "999",
  },
  topbarWrap: {
    height: "100%",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topRight: {
    display: "flex",
    width: "180px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "indigo",
  },
  iconContainer: {
    position: "relative",
  },
  iconBag: {
    position: "absolute",
    bottom: "-3px",
    right: "-3px",
    fontSize: "10px",
    backgroundColor: "indigo",
    color: "white",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.topbar}>
      <div className={classes.topbarWrap}>
        <div className={classes.topLeft}>
          <span className={classes.logo}>adminDash</span>
        </div>
        <div className={classes.topRight}>
          <div className={classes.iconContainer}>
            <NotificationsNoneIcon />
            <span className={classes.iconBag}>2</span>
          </div>
          <div className={classes.iconContainer}>
            <LanguageIcon />
          </div>
          <div className={classes.iconContainer}>
            <SettingsIcon />
          </div>
          <Avatar sx={{ bgcolor: "#D94C12" }}>M</Avatar>
        </div>
      </div>
    </div>
  );
}
