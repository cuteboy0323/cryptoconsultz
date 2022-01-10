import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import useStyles from "../assets/styles";

import Webinars from "../assets/img/packages/webinars.jpg";

const Learn = () => {
    const classes = useStyles();

    return (
        <Box className={classes.learn}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Learn
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Learn
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="learn">
                    <Typography variant="h5" className={classes.title}>
                        <Box component="span">Blockchain & Cryptocurrency</Box> Webinars
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Don't know where to start?  Need a basic understanding of blockchain, cryptocurrency, Bitcoin and crypto investing?
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                We offer group sessions on a variety of topics.
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Our Blockchain & Crypto 101 course offers participants 60 mins of basic learning in a group setting and an open Q&A session with REKT owner/founder, Nicole DeCicco.
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                It's a great way to gain all the benefits of a private consultation at a significant discount!  Join live or purchase one of our prerecorded sessions for just $99.
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Email info@rekt.com to learn about session dates, set up a group session or suggest topics for our next live webinar.
                            </Typography>
                            <Box component="br" />
                            <Button variant="contained" color="secondary" size="large">
                                Join the next session!
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} className="img-wrapper">
                            <Box component="img" src={Webinars} alt="Webinars" />
                        </Grid>
                    </Grid>
                    <Box component="br" />
                    <Box component="br" />
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h5" className={classes.title}>
                                What is <Box component="span">blockchain?</Box>
                            </Typography>
                            <iframe
                                width="100%"
                                src="https://www.youtube.com/embed/YIVAluSL9SU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h5" className={classes.title}>
                                What is <Box component="span">cryptocurrency?</Box>
                            </Typography>
                            <iframe
                                width="100%"
                                src="https://www.youtube.com/embed/6Gu2QMTAkEU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Learn;