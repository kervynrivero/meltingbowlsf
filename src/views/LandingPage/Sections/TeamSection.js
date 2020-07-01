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

import team1 from "assets/img/sushiBowl.jpg";
import team2 from "assets/img/veggieBowl.jpg";
import team3 from "assets/img/caribbeanBowl.jpg";
import team4 from "assets/img/mocoLoco.jpg";
import team5 from "assets/img/thaiBowl.jpg";
// import team6 from "assets/img/buddha-bowls-for-kids-blog-square.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  return (
    <div id="menu"className={classes.section}>
    <br/>
    <br/>
      <h2 className={classes.title}>Menu</h2>
      <div>
        <GridContainer >
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
                <img
                src={team4}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />

                
              <h4 className={classes.cardTitle}>
                Moco Loco Bowl{<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$15.00</h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Grass-fed beef patty over steam rice, cabbage and carrot slaw, fried sunny side egg covered our delicious black sweet gravy.
                </h8>
              </CardBody>

            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card plain>

              <img
                src={team5}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 className={classes.cardTitle}>
               Thai Bowl {<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$15.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Grilled chicken over stir fry rice noodles, broccoli, carrots, mushrooms, peppers and jalapenos covered with our Thai sauce
                </h8>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
                <img
                src={team3}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />

              <h4 className={classes.cardTitle}>
                Caribbean Bowl{<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$15.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Juicy shredded beef over steam rice, black beans, fried sweet plantain, avocado and a side of our delicious garlic sauce.

                </h8>
              </CardBody>

            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
          </GridItem>

          {/* <GridItem xs={12} sm={12} md={4}>
            <Card plain>
                <img
                src={team4}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />

                
              <h4 className={classes.cardTitle}>
                Moco Loco Bowl{<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$15.00</h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Grass-fed beef patty over steam rice, cabbage and carrot slaw, fried sunny side egg covered our delicious black sweet gravy.
                </h8>
              </CardBody>

            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card plain>

              <img
                src={team5}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 className={classes.cardTitle}>
               Thai Bowl {<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$15.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Grilled chicken over stir fry rice noodles, broccoli, carrots, mushrooms, peppers and jalapenos covered with our Thai sauce
                </h8>
              </CardBody>
            </Card>
          </GridItem> */}
                    <GridItem justify="center" xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem justify="center" xs={12} sm={12} md={6} className={classes.itemGrid}> */}
                <img
                src={team1}
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
                California Bowl{<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$16.00 </h7>}
                <br/>
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                Crunchy shrimp tempura over steam rice with sesame seeds, kanikama crab, refreshing cucumber and mango salad, edamame, sea weeds and a side of our spicy sriracha aioli.

                </h8>
              </CardBody>

            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}> */}
                <img
                src={team2}
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
                Mediterranean Bowl {<h7 className={classes.blankSpace}>$$</h7>}{<h7 className={classes.description}>$16.00 </h7>}
              </h4>
              <CardBody>
                <h8 className={classes.description}>
                  Crispy falafels over steam red quinoa, creamy hummus, tomato and cucumber salad.
                  {/* You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site. */}
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
