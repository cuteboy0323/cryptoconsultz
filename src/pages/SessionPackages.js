import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import useStyles from "../assets/styles";

import NewOne from "../assets/img/packages/new1.jpg";
import NewTwo from "../assets/img/packages/new2.jpg";
import NewThree from "../assets/img/packages/new3.jpg";
import MultiOne from "../assets/img/packages/multi1.jpg";
import MultiTwo from "../assets/img/packages/multi2.jpg";
import ReturnOne from "../assets/img/packages/return1.jpg";
import ReturnTwo from "../assets/img/packages/return2.jpg";
import Webinars from "../assets/img/packages/webinars.jpg";
import Short from "../assets/img/packages/short.jpg";

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const SessionPackages = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sessionPackages}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Session Packages & Pricing
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Session Packages and Pricing
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="session-packages">
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Link
                            underline="none"
                            color="inherit"
                            href="#new-client"
                        >
                            <Button variant="contained" color="secondary" fullWidth size="large">
                                New Clients
                            </Button>
                        </Link>
                        <Link
                            underline="none"
                            color="inherit"
                            href="#multi-session"
                        >
                            <Button variant="contained" color="secondary" fullWidth size="large">
                                Packages
                            </Button>
                        </Link>
                        <Link
                            underline="none"
                            color="inherit"
                            href="#return"
                        >
                            <Button variant="contained" color="secondary" fullWidth size="large">
                                Clients
                            </Button>
                        </Link>
                        <Link
                            underline="none"
                            color="inherit"
                            href="#question"
                        >
                            <Button variant="contained" color="secondary" fullWidth size="large">
                                Webinars
                            </Button>
                        </Link>
                        <Link
                            underline="none"
                            color="inherit"
                            href="#discounts"
                        >
                            <Button variant="contained" color="secondary" fullWidth size="large">
                                Discounts
                            </Button>
                        </Link>
                    </Stack>
                    <Box className="sections">
                        <Box component="section" id="new-clients" className="new-clients">
                            <Typography variant="h4" className={classes.titleCenter}>
                                New <Box component="span">Clients</Box>
                            </Typography>
                            <Grid container className="grid" spacing={4}>
                                <Grid item xs={12} sm={4}>
                                    <Box component="img" src={NewOne} alt="NewOne" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                        New Clients ( Personal Investors )
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Crypto Coaching Sessions
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Schedule your initial meeting with your dedicated CryptoConsultant for an personalized intake session tailored to your individual needs.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Meet over the phone or by video conference (Zoom),  Get help with wallets, setting up your accounts, learning about specific coins, or just about anything crypto related.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="60 minutes - $350"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="30 minutes - $260"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="15 minutes - $175"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Schedule
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box component="img" src={NewTwo} alt="NewTwo" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                        New Business Clients
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Business Consultations
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Schedule your initial meeting with your dedicated CryptoConsultant for an personalized intake session tailored to your individual needs.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Meet over the phone or by video conference (Zoom),  Get help with wallets, setting up your accounts, learning about specific coins, or just about anything crypto related.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="60 minutes - $650"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="30 minutes - $490"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="15 minutes - $325"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Schedule
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box component="img" src={NewThree} alt="NewThree" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                        Not ready to commit?
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Mini Consultations
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Unsure if CryptoConsultz is the right fit?  Have a quick question?
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Schedule a mini consult to learn more about our services and how we can help.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Meet over the phone or by video conference (Zoom),  Get help with wallets, setting up your accounts, learning about specific coins, or just about anything crypto related.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="5 minutes - $25"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Schedule
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="section" id="multi-session" className="multi-session">
                            <Typography variant="h4" className={classes.titleCenter}>
                                Multi-Session <Box component="span">Packages</Box>
                            </Typography>
                            <Grid container className="grid" spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={MultiOne} alt="MultiOne" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Personal Investor Multi-Session Packages
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Have multiple questions/topics to discuss? Have ongoing needs?  New to crypto and blockchain?  This is the best value long-term. With a rapidly changing industry, you are likely to need ongoing support along your crypto journey.  Get the best guidance along the way by purchasing a CryptoConsultz package.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Learn the crypto & blockchain basics."
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Create a diversified portfolio with investments you've been educated on."
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Create a strategy for managing your portfolio in a highly volatile industry."
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Ensure you're following crypto security practices and protecting your investment."
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Move your investments into cold storage and keep your funds offline and away from hackers."
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Box component="br" />
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="3 hours - $850"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="5 hours - $1350"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="10 hours - $2500"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Shop
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={MultiTwo} alt="MultiTwo" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Business Multi-Session Packages
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Looking to implement crypto and/or blockchain technology into your business? Interested in starting a new cryptocurrency? Need blockchain developers or other recruitment needs?
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Most businesses need ongoing support of a CryptoConsultant in order to stay on top of a rapidly evolving emerging technology. Access our vast network of blockchain experts in order to accomplish all your blockchain related business goals.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Hire blockchain developers"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Develop portfolio strategies"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="Access legal representation specializing in blockchain"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="ICO incubators & accelerators"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="NFT experts"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="And more!"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Box component="br" />
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="3 hours - $1575"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="5 hours - $2425"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="10 hours - $4500"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Shop
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="section" id="return" className="return">
                            <Typography variant="h4" className={classes.titleCenter}>
                                Returning <Box component="span">Clients</Box>
                            </Typography>
                            <Grid container className="grid" spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={ReturnOne} alt="ReturnOne" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Personal Consultations (Return Clients)
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Need more time with your consultant?
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            We've discounted our rates for our loyal and returning customers.  Consider a multi-session package to save money but, if you simply need another single session we've got options.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="60 minutes  - $300"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="30 minutes - $225"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="15 mintues - $150"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Schedule
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={ReturnTwo} alt="ReturnTwo" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Business Consultations (Return Clients)
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Schedule your initial meeting with your dedicated CryptoConsultant for an personalized intake session tailored to your individual needs.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Meet over the phone or by video conference (Zoom),  Get help with wallets, setting up your accounts, learning about specific coins, or just about anything crypto related.
                                        </Typography>
                                        <Box component="br" />
                                    </Box>
                                    <Box className="schedule">
                                        <List>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="60 minutes  - $550"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="30 minutes - $425"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            color: "textSecondary"
                                                        }}
                                                        primary="15 mintues - $275"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                        <Button variant="contained" color="secondary" fullWidth size="large">
                                            Schedule
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="section" id="question" className="question">
                            <Typography variant="h4" className={classes.titleCenter}>
                                Quick question? <Box component="span">Need the basics?</Box>
                            </Typography>
                            <Grid container className="grid" spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={Webinars} alt="Webinars" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        CryptoConsultz Webinars
                                    </Typography>
                                    <Box className="schedule">
                                        <Link
                                            underline="none"
                                            color="inherit"
                                            target="_blank"
                                            href="https://form.jotform.com/210511577701044"
                                        >
                                            <Button variant="contained" color="secondary" fullWidth size="large">
                                                Shop Webinars
                                            </Button>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box component="img" src={Short} alt="Short" />
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Mini Consultations
                                    </Typography>
                                    <Box className="schedule">
                                        <Link
                                            underline="none"
                                            color="inherit"
                                            target="_blank"
                                            href="https://calendly.com/cryptoconsultz/quickconsult"
                                        >
                                            <Button variant="contained" color="secondary" fullWidth size="large">
                                                Schedule
                                            </Button>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="section" id="discounts" className="submit-comment">
                            <Grid container className="grid" spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Not ready to commit?
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            Due to high-demand, our sessions are limited.  If you are interested in future sessions or have questions, fill out this form.  We keep our customer satisfaction a priority and prioritize accordingly.  Response times may be delayed for general inquiries.
                                        </Typography>
                                        <Box component="br" />
                                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="First Name"
                                                color="secondary"
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                label="Last Name"
                                                color="secondary"
                                            />
                                        </Stack>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Email"
                                            margin="normal"
                                            color="secondary"
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            margin="normal"
                                            label="Comment"
                                            color="secondary"
                                        />
                                    </Box>
                                    <Box component="br" />
                                    <Button variant="contained" color="secondary" fullWidth size="large">
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        color="textSecondary"
                                        className="caption"
                                    >
                                    </Typography>
                                    <Typography
                                        color="secondary"
                                        className="title"
                                        variant="h5"
                                    >
                                        Apply for a discount.
                                    </Typography>
                                    <Box className="content">
                                        <Typography color="textSecondary">
                                            It's our mission at CryptoConsultz to provide access to cryptocurrency and blockchain support, regardless of your financial status.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Consider our webinars for 60 minutes of premium content at a much lower cost than a full consult.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            If these options aren't available for you, due to your financial situation, please fill out this form. Explain your circumstances and we'll review your application.  If your specific situation meets our criteria and we're confident we'll be able to help you, you'll receive notification of approval at a reduced rate or free of charge.  We weave a number of these consultations throughout the week in order to fulfill our mission of continued access to cryptocurrency and blockchain technology for all.
                                        </Typography>
                                        <Box component="br" />
                                        <Typography color="textSecondary">
                                            Due to high demand, denied applications will not necessarily receive notification. We are able to approve a small number of applications compared to the demand. Please do not make further inquires into the status of your application or it will be denied.  We will keep applications in our database and if/when we are able to help you'll be the first to know!
                                        </Typography>
                                        <Box component="br" />
                                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="First Name"
                                                color="secondary"
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                label="Last Name"
                                                color="secondary"
                                            />
                                        </Stack>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Email"
                                            margin="normal"
                                            color="secondary"
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            margin="normal"
                                            label="Comment"
                                            color="secondary"
                                        />
                                    </Box>
                                    <Box component="br" />
                                    <Button variant="contained" color="secondary" fullWidth size="large">
                                        Schedule
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SessionPackages;