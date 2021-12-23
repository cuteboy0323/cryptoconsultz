import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import useStyles from "../assets/styles";

import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

import Logo from "../assets/img/logo.png";
import Investment from "../assets/img/home/investment.png";
import Business from "../assets/img/home/business.png";

import CNN from "../assets/img/partner/cnn-logo.png";
import MSN from "../assets/img/partner/msn-logo.png";
import NextAD from "../assets/img/partner/next-advisor-logo.png";
import TRD from "../assets/img/partner/trd-news.jpg";

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.home}>
            <Box component="section" className="hero">
                <Container>
                    <Box className="logo-banner">
                        <Box component="img" src={Logo} alt="logo" />
                        <Typography variant="h2" className="title">
                            CryptoConsultz
                        </Typography>
                        <Typography variant="h6" color="secondary" className="sub-title">
                            Blockchain & Digital Currency Consulting Services
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box component="section" className="video">
                <Container>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fY0Bj788cII"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Box className="chip-container">
                        <Chip className="chip" label="Session Pricing and Packages" variant="outlined" color="primary" />
                        <Chip className="chip" label="What We Offer" variant="outlined" color="primary" />
                        <Chip className="chip" label="Schedule Consultation" variant="outlined" color="primary" />
                        <Chip className="chip" label="Learn About Cryptocurrency and Blockchain" variant="outlined" color="primary" />
                        <Chip className="chip" label="Waiting List" variant="outlined" color="primary" />
                    </Box>
                </Container>
            </Box>
            <Box component="section" className="voice">
                <Container>
                    <iframe title="CEO-Voice" src="https://omny.fm/shows/socially-powered-digital-marketing-show-podcast/blockchain-security-cold-storage-coins-with-nicole/embed" />
                </Container>
            </Box>
            <Box component="section" className="investment">
                <Container>
                    <Typography variant="h4" className={classes.title}>
                        Diversify your <Box component="span">investment</Box>
                    </Typography>
                    <Typography>
                        Diversify your investment portfolio by investing in cryptocurrency.
                    </Typography>
                    <br />
                    <Typography>
                        Navigating the rapidly evolving cryptocurrency market can be confusing, challenging and risky without the help of a cryptocurrency consultant.  CryptoConsultz provides support for all levels of crypto-curious investors.
                    </Typography>
                    <br />
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                Benefits of a CryptoConsultant:
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Understand blockchain technology and the cryptocurrency market." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Setup online cryptocurrency accounts." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Create your secure cryptowallet." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Learn how to protect your investment using the most effective security devices and strategies." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Stay up to date on new currencies and ICOs." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Learn about cryptocurrency mining." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Learn how to purchase, trade and sell funds." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Keep your funds safe and secure, away from hackers." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Decipher the hype from coins with long-term potential." />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className="img-wrapper" item xs={12} sm={6}>
                            <Box component="img" src={Investment} alt="investment" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" className="business">
                <Container>
                    <Typography variant="h4" className={classes.title}>
                        Business <Box component="span">Consulting</Box>
                    </Typography>
                    <Typography>
                        CryptoConsultz offers a multitude of services for ecosystems participating in the Blockchain space and business servicing the Blockchain industry.
                    </Typography>
                    <br />
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                Services include (but not limited to):
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Business Development" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Strategic Partnerships" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Marketing & Community Engagement" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="PR & ICO Incubator Partnerships" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Recruitment" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Content Contributions/Writing" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Event Planning & Coordination" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ArrowRightAltRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="And More!" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className="img-wrapper" item xs={12} sm={6}>
                            <Box component="img" src={Business} alt="investment" />
                        </Grid>
                    </Grid>
                    <Typography>
                        Contact us for a FREE initial consultation.  Send inquiries to <Link href="mailto:info@cryptoconsultz.com">info@cryptoconsultz.com</Link>
                    </Typography>
                </Container>
            </Box>
            <Box component="section" className="partner">
                <Container>
                    <Typography variant="h4" className={classes.title}>
                        As Seen <Box component="span">On...</Box>
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <IconButton className="partner-link">
                            <Box component="img" src={CNN} alt="CNN" />
                        </IconButton>
                        <IconButton className="partner-link">
                            <Box component="img" src={MSN} alt="MSN" />
                        </IconButton>
                        <IconButton className="partner-link">
                            <Box component="img" src={NextAD} alt="NextAD" />
                        </IconButton>
                        <IconButton className="partner-link">
                            <Box component="img" src={TRD} alt="TRD" />
                        </IconButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Home;