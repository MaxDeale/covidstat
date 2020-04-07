import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";


// passing api data into cards component as props
const Cards = ({
    data: {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
}) => {
    // if there are no confirmed cases currently in state then loading is displayed
    // cards use material UI , countup package for number dynamic countup
    if (!confirmed) {
        return "Loading...";
    }
    return (
        <div className={
            styles.container
        }>
            <Grid container
                spacing={3}
                justify="center">

                <Grid item
                    component={Card}
                    xs={12}
                    md={3}
                    className={
                        cx(styles.card, styles.infected)
                }>
                    <CardContent>
                        <Typography style={
                                {color: "blue"}
                            }
                            gutterBottom>
                            Infected{" "} </Typography>
                        <Typography variant="h5">
                            <CountUp start={0}
                                end={
                                    confirmed.value
                                }
                                duration={2.5}
                                separator=","/>
                        </Typography>
                        <Typography className="update"
                            style={
                                {fontSize: "11px"}
                            }
                            color="textSecondary">
                            {" "}
                            Updated:{
                            new Date(lastUpdate).toDateString()
                        }
                            {" "} </Typography>
                        <Typography variant="h5"></Typography>
                        <Typography variant="body2">
                            Current number of active cases{" "} </Typography>
                    </CardContent>
                </Grid>
                <Grid item
                    component={Card}
                    xs={12}
                    md={3}
                    className={
                        cx(styles.card, styles.recovered)
                }>
                    <CardContent>
                        <Typography style={
                                {color: "green"}
                            }
                            gutterBottom>
                            Recoveries{" "} </Typography>
                        <Typography variant="h5">
                            <CountUp start={0}
                                end={
                                    recovered.value
                                }
                                duration={2.5}
                                separator=","/>
                        </Typography>
                        <Typography className="update"
                            style={
                                {fontSize: "11px"}
                            }
                            color="textSecondary">
                            {" "}
                            Updated:{
                            new Date(lastUpdate).toDateString()
                        }
                            {" "} </Typography>

                        <Typography variant="body2">
                            Current number of recovered cases{" "} </Typography>
                    </CardContent>
                </Grid>
                <Grid item
                    component={Card}
                    xs={12}
                    md={3}
                    className={
                        cx(styles.card, styles.deaths)
                }>
                    <CardContent>
                        <Typography style={
                                {color: "red"}
                            }
                            gutterBottom>
                            Deaths{" "} </Typography>
                        <Typography variant="h5">
                            <CountUp start={0}
                                end={
                                    deaths.value
                                }
                                duration={2.5}
                                separator=","/>
                        </Typography>
                        <Typography className="update"
                            style={
                                {fontSize: "11px"}
                            }
                            color="textSecondary">
                            {" "}
                            Updated:{
                            new Date(lastUpdate).toDateString()
                        }
                            {" "} </Typography>

                        <Typography variant="body2">Current number of deaths
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
