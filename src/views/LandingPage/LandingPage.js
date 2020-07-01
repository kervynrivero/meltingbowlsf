import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import Desserts from "./Sections/Desserts.js";
import ContactUs from "./Sections/ContactUs.js";
import logoletras from "assets/img/faces/letras1.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/ola.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img src={logoletras} className={classes.img2} alt="profile" />

              <h4>Fusion of culture, creativity and good taste!</h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.instagram.com/meltingbowlsf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <InstagramIcon
                  style={{ fontSize: 60, color: "#8a3ab9" }}
                  fontSize="large"
                /> */}
                <i className={classes.socialIcons + " fab fa-instagram"} />
                {/* <i className="fas fa-play" /> */}
                Follow us
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <Desserts />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
