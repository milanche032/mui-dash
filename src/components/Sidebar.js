import React from "react";
import { makeStyles } from "@mui/styles";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import Typography from "@mui/material/Typography";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  sidebar: {
    flex: "1",
    height: `max-content`,
    backgroundColor: "#FFF6FF",
  },
  sidebarWrap: {
    padding: "20px",
    color: "#555",
  },

  sidebarTitle: {
    color: "rgb(147, 146, 146)",
    fontSize: "16px !important",
  },
  active: {
    backgroundColor: "#FFE7FF",
    borderRadius: "10px",
  },
});
export default function Sidebar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const dashMenuItems = [
    {
      title: "Home",
      icon: <LineStyleIcon />,
      path: "/",
    },
    {
      title: "Analytics",
      icon: <AnalyticsIcon />,
      path: "/analytics",
    },
    {
      title: "Sales",
      icon: <TrendingUpIcon />,
      path: "/sales",
    },
  ];
  const quickMenuItems = [
    {
      title: "Users",
      icon: <PersonOutlineIcon />,
      path: "/users",
    },
    {
      title: "Product",
      icon: <StorefrontIcon />,
      path: "/product",
    },
    {
      title: "Transactions",
      icon: <ReceiptLongIcon />,
      path: "/transactions",
    },
    {
      title: "Reports",
      icon: <BarChartIcon />,
      path: "/reports",
    },
  ];
  const notiMenuItems = [
    {
      title: "Mail",
      icon: <MailOutlineIcon />,
      path: "/mail",
    },
    {
      title: "Feedback",
      icon: <FeedbackOutlinedIcon />,
      path: "/feedback",
    },
    {
      title: "Messages",
      icon: <MessageOutlinedIcon />,
      path: "/messages",
    },
  ];
  const staffMenuItems = [
    {
      title: "Home",
      icon: <LineStyleIcon />,
      path: "/",
    },
    {
      title: "Analytics",
      icon: <AnalyticsIcon />,
      path: "/analytics",
    },
    {
      title: "Sales",
      icon: <TrendingUpIcon />,
      path: "/sales",
    },
  ];
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrap}>
        <div className={classes.sidebarMenu}>
          <Typography className={classes.sidebarTitle} variant="h5">
            Dashboard
          </Typography>
          <List className={classes.sidebarList}>
            {dashMenuItems.map((dashMenuItem) => (
              <ListItem
                key={dashMenuItem.title}
                className={
                  location.pathname === dashMenuItem.path
                    ? classes.active
                    : null
                }
              >
                <ListItemButton onClick={() => navigate(dashMenuItem.path)}>
                  {dashMenuItem.icon}
                  <Typography variant="body1" color="initial">
                    {dashMenuItem.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.sidebarTitle} variant="h5">
            Quick Menu
          </Typography>
          <List className={classes.sidebarList}>
            {quickMenuItems.map((quickMenuItem) => (
              <ListItem
                key={quickMenuItem.title}
                className={
                  location.pathname === quickMenuItem.path
                    ? classes.active
                    : null
                }
              >
                <ListItemButton onClick={() => navigate(quickMenuItem.path)}>
                  {quickMenuItem.icon}
                  <Typography variant="body1" color="initial">
                    {quickMenuItem.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.sidebarTitle} variant="h5">
            Notifications
          </Typography>
          <List className={classes.sidebarList}>
            {notiMenuItems.map((notiMenuItem) => (
              <ListItem
                key={notiMenuItem.title}
                className={
                  location.pathname === notiMenuItem.path
                    ? classes.active
                    : null
                }
              >
                <ListItemButton onClick={() => navigate(notiMenuItem.path)}>
                  {notiMenuItem.icon}
                  <Typography variant="body1" color="initial">
                    {notiMenuItem.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.sidebarTitle} variant="h5">
            Staff
          </Typography>
          <List className={classes.sidebarList}>
            {staffMenuItems.map((staffMenuItem) => (
              <ListItem
                key={staffMenuItem.title}
                className={
                  location.pathname === staffMenuItem.path
                    ? classes.active
                    : null
                }
              >
                <ListItemButton onClick={() => navigate(staffMenuItem.path)}>
                  {staffMenuItem.icon}
                  <Typography variant="body1" color="initial">
                    {staffMenuItem.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
