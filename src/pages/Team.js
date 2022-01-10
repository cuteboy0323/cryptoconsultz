import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import useStyles from "../assets/styles";

import CEO from "../assets/img/ceo.jpg";

const Team = () => {
    const classes = useStyles();

    return (
        <Box className={classes.team}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Team
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Team
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="team">
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box component="img" src={CEO} alt="CEO" />
                                </Grid>
                                <Grid item xs={12}>
                                    <iframe
                                        src="https://omny.fm/shows/badcrypto/tales-from-the-crypto-stories-of-hack-victims-and/embed"
                                        width="100%"
                                        height="180px"
                                        title="omny player"
                                        frameBorder="0"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <iframe
                                        width="439"
                                        height="277"
                                        src="https://www.youtube.com/embed/ZJpH-MEBP3k"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Card className="card">
                                        <CardContent>
                                            <Typography className="title" variant="h4">
                                                Nicole DeCicco
                                            </Typography>
                                            <Divider className="dOne" />
                                            <Divider className="dTwo" />
                                            <Typography>
                                                Nicole found a passion for blockchain technology as a cryptocurrency enthusiast and Etherum miner in late 2015.  She turned her hobby into her career, as she transitioned from nearly two decades in the healthcare field to launch REKT in 2017.  She is passionate about making blockchain and cryptocurrency accessible to all and advocates for mass adoption of cryptographic technologies.
                                            </Typography>
                                            <Box component="br" />
                                            <Typography>
                                                REKT offers services for both individuals and blockchain organizations with a mission of personalizing services to meet each client's individual needs.
                                            </Typography>
                                            <Box component="br" />
                                            <Typography>
                                                Nicole consults at the organizational level and offers a variety of business development support services.   Nicole effectively facilitates strategic partnerships through industry outreach and alliances.  As a creative results-driven thinker, Nicole's consultative services deliver results that bring a clear return on investment.  With experience in business development project/program management, and process improvement she is able to personalize services to meet the needs of companies delivering blockchain use cases in a variety of industries.
                                            </Typography>
                                            <Box component="br" />
                                            <Typography>
                                                Nicole is currently a content contributor for Graft.network
                                                She has been featured on The Bad Crypto Podcast episode 112, Tales from the Crypto.  She supports Cold Storage Coins as the Director of Business Development and is the VP of Strategic Partnerships for Token Forum.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <iframe
                                        width="551"
                                        height="340"
                                        src="https://www.youtube.com/embed/HXwFNfuEkdo"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Team;