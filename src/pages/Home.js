import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import useStyles from "../assets/styles";

import Logo from "../assets/img/logo.png";

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.home}>
            <Box component="section" className="hero">
                <Container>
                    <Box className="logo-banner">
                        <Box component="img" src={Logo} alt="logo" />
                        <Typography variant="h4" className="title">
                            CryptoConsultz
                        </Typography>
                        <Typography variant="h6" className="sub-title">
                            Blockchain & Digital Currency Consulting Services
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Home;