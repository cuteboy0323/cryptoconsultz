import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStyles from "../assets/styles";

const CustomerService = () => {
    const classes = useStyles();

    const [rType, setrType] = React.useState(1);
    const [isCustomer, setIsCustomer] = React.useState(1);

    const rTypeChange = (event) => {
        setrType(event.target.value);
    };
    const customerChange = (event) => {
        setIsCustomer(event.target.value);
    };

    return (
        <Box className={classes.products}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Customer Service Requests
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Customer Service Requests
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="contact">
                    <Typography color="secondary" variant="h5">
                        Submit Your Customer Service Request
                    </Typography>
                    <Box component="br" />
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Request Type *</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            color="secondary"
                            value={rType}
                            label="Request Type *"
                            required
                            onChange={rTypeChange}
                        >
                            <MenuItem value={1}>Questions about my upcoming meeting.</MenuItem>
                            <MenuItem value={2}>Feedback on previously attended meeting.</MenuItem>
                            <MenuItem value={3}>Refund Request</MenuItem>
                            <MenuItem value={4}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <Box component="br" />
                    <Box component="br" />
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Are you currently a CryptoConsultz customer? *</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            color="secondary"
                            value={isCustomer}
                            label="Are you currently a CryptoConsultz customer? *"
                            required
                            onChange={customerChange}
                        >
                            <MenuItem value={1}>Yes- I have completed a consultation with a consultant.</MenuItem>
                            <MenuItem value={2}>No but I am interested in the services.</MenuItem>
                            <MenuItem value={3}>Yes I have scheduled but not completed a consultation with a consultant.</MenuItem>
                            <MenuItem value={4}>No I am not currently a CryptoConsultz customer.</MenuItem>
                            <MenuItem value={5}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <Box component="br" />
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
                    <Typography color="textSecondary">
                        Please note:  While we make every attempt to reply to customer service requests as soon as possible, during times of high-volume response times may be delayed.  Please see our Terms of Service for details on customer support response times.
                    </Typography>
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

export default CustomerService;