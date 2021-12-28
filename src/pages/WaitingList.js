import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import useStyles from "../assets/styles";

const Services = () => {
    const classes = useStyles();

    return (
        <Box className={classes.waitingList}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Waiting List
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Waiting List
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="waiting-list">
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6}>
                            <Typography color="secondary">
                                I wasn’t able to find a open session time. Can I get on the CryptoConsultz waiting list?
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Although CryptoConsultz offers a wide range of session times, high demand means we can’t always meet everyone’s needs right away. To satisfy as many customers as possible, we offer a waiting list. This helps us fill dates that become available as reservations are canceled or changed.
                            </Typography>
                            <Box component="br" />
                            <Typography color="secondary">
                                How close am I to the top of the waitlist?
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Session availability will be sent out through email. Open sessions are on a first come first serve basis. The first customer to schedule and pay for the session slot will reserve that time.
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                You can return to our
                                <Link
                                    href="https://calendly.com/cryptoconsultz"
                                    target="_blank"
                                >
                                    {" scheduling & payment "}
                                </Link>
                                page at any time to check for new session availability.
                            </Typography>
                            <Box component="br" />
                            <Typography color="secondary">
                                I have a reservation for a session already but was unable to schedule more time.  Can I waitlist for additional time?
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                Yes. Existing / returning CryptoConsultz clients will have priority on open slots.
                            </Typography>
                            <Box component="br" />
                            <Typography color="secondary">
                                Questions?
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                <Link
                                    href="mailto:waitlist@cryptoconsultz.com"
                                    target="_blank"
                                >
                                    waitlist@cryptoconsultz.com
                                </Link>
                            </Typography>
                            <Box component="br" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                                label="Phone Number"
                                color="secondary"
                            />
                            <Box component="br" />
                            <FormControl component="fieldset" style={{
                                marginTop: 32
                            }}>
                                <FormLabel component="legend">Choose One *</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="15" control={<Radio />} label="15 min consultation" />
                                    <FormControlLabel value="30" control={<Radio />} label="30 min consultation" />
                                    <FormControlLabel value="60" control={<Radio />} label="60 min consultation" />
                                    <FormControlLabel value="other" control={<Radio />} label="I am interested in multi-session packages." />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={5}
                                margin="normal"
                                label="Please describe what types of services you are looking for."
                                color="secondary"
                                style={{
                                    marginTop: 32
                                }}
                            />
                            <FormGroup
                                style={{
                                    marginTop: 16
                                }}
                            >
                                <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to receiving marketing and promotional materials" />
                            </FormGroup>
                            <Button
                                style={{
                                    marginTop: 16
                                }}
                                variant="contained"
                                color="secondary"
                                fullWidth
                                size="large"
                            >
                                Schedule
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Services;