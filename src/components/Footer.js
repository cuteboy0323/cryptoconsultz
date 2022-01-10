import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from "@mui/material/Link";

import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

import useStyles from "../assets/styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar
            component="footer"
            className={classes.footer}
            position="static"
        >
            <Toolbar>
                <Container>
                    <Stack>
                        <Typography className="company-name">
                            REKT.llc
                        </Typography>
                        <Divider className="dividerOne" />
                        <Divider className="dividerTwo" />
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={8}>
                                <Typography>
                                    Copyright © 2018
                                </Typography>
                                <Typography>
                                    Information provided through informational consulting sessions is for informational purposes only and should not be considered legal or financial advice.  You should consult with an attorney or other professional to determine what may be best for your individual needs.  REKT LLC does not make any guarantee or other promise as to any results that may be obtained from using this service. No one should make any investment decision without first consulting his or her own financial advisor and conducting his or her own research and due diligence. To the maximum extent permitted by law, REKT LLC disclaims any and all liability in the event any information, commentary, analysis, opinions, advice and/or recommendations prove to be inaccurate, incomplete or unreliable, or result in any investment or other losses.  Customers are required to review Terms of Service, Legal Considerations, Risk & Disclaimer carefully prior to use of REKT LLC services.
                                </Typography>
                                <br />
                                <Typography>
                                    Your use of the information provided or materials is at your own risk.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <List>
                                    <Link href="/session-packages-and-pricing" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Inventory2RoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Sesion Packages & Pricing" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/schedule-and-pay" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <EventNoteRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Schedule & Pay" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/waiting-list" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <PlaylistAddCheckRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Waiting List" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/terms-of-service-agreement" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <LocalPoliceRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Terms of Service Agreement" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/team" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <GroupsRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Team" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/crypto-products" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <QrCodeRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Crypto Products" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                    <Link href="/contact" underline="none" color="inherit">
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SupportAgentRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Contact Us" />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                </List>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;