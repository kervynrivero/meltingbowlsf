import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(styles);

export default function ContactUs() {
  const classes = useStyles();
  //   const classes2 = useStyles2();

  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid,
  // );
  function handlePageChange() {
    window.location.href = "https://www.instagram.com/meltingbowlsf/";
  }
  return (
    <div id="contact" className={classes.section}>
      <br />
      <br />

      <h2 className={classes.title}>Contact Us</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <IconButton aria-label="delete" className={classes.margin}>
                  <InstagramIcon
                    style={{ fontSize: 60, color: "#8a3ab9" }}
                    fontSize="large"
                    onClick={handlePageChange}
                  />
                </IconButton>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Follow us on{" "}
                <a href="https://www.instagram.com/meltingbowlsf">Instagram</a>
              </h4>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <IconButton
                  disabled
                  aria-label="delete"
                  className={classes.margin}
                >
                  <PhoneIcon
                    style={{ fontSize: 60, color: "#008000" }}
                    fontSize="large"
                    onClick={handlePageChange}
                  />
                </IconButton>
              </GridItem>
              <h4 className={classes.cardTitle}>
                <u>1050 Post Street. San Francisco.</u>
                <br />
                <u>+1(415)283-7646</u>
              </h4>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <IconButton
                  disabled
                  aria-label="delete"
                  className={classes.margin}
                >
                  <MailOutlineIcon
                    style={{ fontSize: 60, color: "#0000FF" }}
                    fontSize="large"
                    onClick={handlePageChange}
                  />
                </IconButton>
              </GridItem>

              {/* <a className={classes.cardTitle}href={"mailto:"+ "meltingbowlsf@gmail.com"}> 
              
              <h4 className={classes.cardTitle}>meltingbowsf@gmail.com</h4>
              
              </a> */}
              <h4 className={classes.cardTitle}>
                <u>meltingbowlsf@gmail.com</u>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
