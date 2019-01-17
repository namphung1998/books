import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";

export default ({ children, onSelect, onDelete, imageUri }) => {
  return (
    <ListItem onClick={onSelect} button divider>
      <ListItemAvatar>
        <Avatar src={imageUri} />
      </ListItemAvatar>
      <ListItemText primary={children} />
      <ListItemSecondaryAction>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
