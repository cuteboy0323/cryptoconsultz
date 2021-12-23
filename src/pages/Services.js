import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import useStyles from "../assets/styles";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Services = () => {
    const classes = useStyles();

    return (
        <Box className={classes.services}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Services
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Services
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="services">
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <Card className="card">
                                        <CardContent>
                                            <Typography className="title" variant="h5">
                                                Beginner
                                            </Typography>
                                            <Divider className="dOne" />
                                            <Divider className="dTwo" />
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Get help learning cryptocurrency & blockchain basics." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn how to monitor your investment." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn how to buy, sell, or trade cryptocurrency." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn about exchanges, online wallets, hard wallets and cold storage." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Understand the risks involved in investing and how to decrease risk of loss." />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className="card">
                                        <CardContent>
                                            <Typography className="title" variant="h5">
                                                Everyone
                                            </Typography>
                                            <Divider className="dOne" />
                                            <Divider className="dTwo" />
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Improve your security practices.  Theft and loss are common in this industry." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Create a personal investment and payout strategy" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Diversify your current investment portfolio." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn about various coins, blockchains, tokens/ICOs and their real-life applications." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Understand basic tax laws around cryptocurency buying, trading and selling." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn about cryptocurrency mining." />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <Card className="card">
                                        <CardContent>
                                            <Typography className="title" variant="h5">
                                                Startups.
                                            </Typography>
                                            <Divider className="dOne" />
                                            <Divider className="dTwo" />
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Project & Program Management" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Team Facilitation." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Process Improvement" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Industry Outreach/Alliances" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Strategic Partnerships" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Writing Contributions" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Marketing Strategy" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Media and Influencer Relations" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Event Planning/Coordination" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Connect with Industry Leaders" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Looking for something else?  We can help." />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className="card">
                                        <CardContent>
                                            <Typography className="title" variant="h5">
                                                Advanced
                                            </Typography>
                                            <Divider className="dOne" />
                                            <Divider className="dTwo" />
                                            <List>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Connect with industry leaders and experts." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn about special deals and rates on products and events." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Learn about different coins, blockchains, tokens/ICOs and their real-life applications." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Connect with cryptocurrency accountants." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Buy mining rigs or find a mining rig host." />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckRoundedIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Looking for something else?  We can help." />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Services;