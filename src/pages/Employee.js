import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useStyles from "../assets/styles";

const Employee = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.products}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Employee
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Employee
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="contact">
                </Box>
            </Container>
            <Dialog
                open={open}
                className={classes.protectDialog}
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle color="secondary">
                    This area is password protected
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the password below
                    </DialogContentText>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        label="Password"
                        color="secondary"
                    />
                </DialogContent>
                <DialogActions>
                    <Link
                        underline="none"
                        href="/"
                    >
                        <Button variant="outlined" color="secondary">Back</Button>
                    </Link>,
                    <Button onClick={handleClose} color="secondary" variant="contained">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Employee;