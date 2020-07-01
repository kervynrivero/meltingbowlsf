/*eslint-disable*/
import React from "react";
import { useRef } from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import PhoneIcon from '@material-ui/icons/Phone';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
const useStyles = makeStyles(styles);
// var hist=createBrowserHistory()
export default function HeaderLinks(props) {
  const classes = useStyles();
  const myRef = useRef(null)
  // const history = useHistory();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a color="transparent"
          className={classes.navLink} href='#menu'>
          <RestaurantMenuIcon className={classes.icons} /> Menu
        </a>
      </ListItem>

      <ListItem className={classes.listItem}>
      <a color="transparent"
          className={classes.navLink} href='#contact'>
          <PhoneIcon className={classes.icons} />  Contact Us
        </a>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/meltingbowlsf"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}
