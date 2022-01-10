import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import useStyles from "../assets/styles";

const Contact = () => {
    const classes = useStyles();

    return (
        <Box className={classes.products}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Contact Us
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Contact Us
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="contact">
                    <Typography color="secondary" variant="h5">
                        Not ready to commit?
                    </Typography>
                    <Box component="br" />
                    <Typography color="secondary" variant="h5">
                        Have questions about our services?
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        Due to high-demand, our sessions are limited.  If you are interested in future sessions but have questions, fill out this form.  We keep our customer satisfaction a priority and prioritize accordingly, response times may be delayed for general inquiries.  If you are a current REKT customer and have a customer service request please visit our Customer Service page to submit a request.
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
                        rows={10}
                        multiline
                        margin="normal"
                        label="Comment"
                        color="secondary"
                    />
                    <Box component="br" />
                    <Box component="br" />
                    <Button variant="contained" color="secondary" size="large">
                        Submit
                    </Button>
                    <Box component="br" />
                    <Box component="br" />
                </Box>
            </Container>
        </Box>
    )
}

export default Contact;