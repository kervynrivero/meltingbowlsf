import React from "react";
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import choco from "assets/img/chocoDessert.jpg";
import lime from "assets/img/keyLime.jpg";

const useStyles = makeStyles(styles);

export default function Desserts() {
  const classes = useStyles();
//   const imageClasses = classNames(
//     classes.imgRaised,
//     classes.imgRoundedCircle,
//     classes.imgFluid
//   );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Sweet Treats</h2>
      <div >
        <GridContainer >
        <GridItem xs={12} sm={12} md={2}>
          </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}> */}
                <img
                src={choco}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />

                
              {/* </GridItem> */}
              <h4 className={classes.cardTitle}>
                Mocha Mousse{<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$6.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Creamy coffee infused mousse over a chocolate marquise
                </h8>
              </CardBody>

            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}> */}

              <img
                src={lime}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              {/* </GridItem> */}
              <h4 className={classes.cardTitle}>
                Key Lime Mousse {<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$6.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Creamy Key Lime mousse on top of a crispy crust of Marie cookies
                </h8>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
