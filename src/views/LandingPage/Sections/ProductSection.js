import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import AccessibleForwardTwoToneIcon from '@material-ui/icons/AccessibleForwardTwoTone';
import EcoIcon from "@material-ui/icons/Eco";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Us</h2>
          <h5 className={classes.description}>
            Melting Bowl was born in San Francisco from the concept of bringing
            together different flavors and cultures into a bowl. All our bowls
            are prepared with great dedication and high-quality ingredients.
            Melting Bowl is a gourmet meal full of natural, fresh and healthy
            ingredients. We are dedicated to offer a great mix of flavors and to
            promote a well-balanced diet.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Environment"
              description="
              We are fully committed to helping our environment; therefore,
               all our containers and cutlery are biodegradable, made of 
               eco-friendly natural fiber sugarcane. Our bowls are 
               microwave safe and can be refrigerated and frozen."
              icon={EcoIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Delivery"
              description="
              Our delivery service is done by bike. We think it is a great
               way to better the community, we stay healthy, we contribute 
               to the environment by reducing the carbon footprint in the
                city and we support our workers by providing jobs during 
                these difficult times."
              icon={DirectionsBikeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Order "
              description="How does it work?"
              icon={ShoppingCartIcon}
              iconColor="danger"
              vertical
            />
            <p className={classes.description}>
              Delivery: we take orders one day in advance.
              <br />
              Take-out: we take same day orders to be picked up from 2:00 -
              8:00pm.
              <br />
              1050 Post Street. San Francisco.
              <br />
              Text us to: 415.283.7646
              <br />
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
