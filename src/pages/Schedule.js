import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import useStyles from "../assets/styles";

const Schedule = () => {
    const classes = useStyles();

    return (
        <Box className={classes.schedule}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Schedule & Pay
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                        Schedule & Pay
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="schedule">
                </Box>
            </Container>
        </Box>
    )
}

export default Schedule;