import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useStyles from "../HeaderStyle";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard",icon: <DashboardCustomizeIcon /> },
    { label: "Blog Post", icon: <BookmarkIcon/> },
    { label: "Link 1", icon: <PostAddIcon /> },
    {
      label: "Notification",
      icon: <NotificationAddIcon />,
    },
    { label: "logout",icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => {
        return (
              <ListItem key={i}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        )})}
    </List>
  );
}