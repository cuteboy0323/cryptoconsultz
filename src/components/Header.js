import React from "react";

import clsx from "clsx";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import CameraIndoorRoundedIcon from '@mui/icons-material/CameraIndoorRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

import useStyles from "../assets/styles";

import Logo from "../assets/img/favicon.png";

const Header = () => {
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <AppBar className={clsx(classes.appbar, {
            "animate-appbar": trigger,
            "transparent": !trigger
        })} position="fixed">
            <Toolbar className="top-toolbar">
                <Container>
                    <Box>
                        <Button
                            color="inherit"
                            component="a"
                            sx={{ mr: 2 }}
                            startIcon={
                                <LocalPhoneRoundedIcon />
                            }
                        >
                            (971) 808-2309
                        </Button>
                        <Button
                            color="inherit"
                            component="a"
                            sx={{ mr: 2 }}
                            startIcon={
                                <MailRoundedIcon />
                            }
                        >
                            info@rekt.com
                        </Button>
                    </Box>
                    <Box>
                        <IconButton sx={{ mr: 2 }}>
                            <TelegramIcon />
                        </IconButton>
                        <IconButton sx={{ mr: 2 }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ mr: 2 }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton sx={{ mr: 2 }}>
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Toolbar>
            <Toolbar className="bottom-toolbar">
                <Container>
                    <Box className="logo">
                        <Box component="img" src={Logo} alt="logo" />
                    </Box>
                    <Box className="space" />
                    <Box className="menu">
                        <Link href="/" underline="none" color="inherit">
                            <Button color="inherit" sx={{ m: 1 }}>
                                Home
                            </Button>
                        </Link>
                        <Link href="/services" underline="none" color="inherit">
                            <Button color="inherit" sx={{ m: 1 }}>
                                Services
                            </Button>
                        </Link>
                        <Link href="/session-packages-and-pricing" underline="none" color="inherit">
                            <Button color="inherit" sx={{ m: 1 }}>
                                Packages
                            </Button>
                        </Link>
                        <Link href="/contact" underline="none" color="inherit">
                            <Button color="inherit" sx={{ m: 1 }}>
                                Contact
                            </Button>
                        </Link>
                        <IconButton
                            id="extra-menu-button"
                            aria-controls="extra-menu"
                            onClick={handleClick}
                            sx={{ m: 2 }}
                        >
                            <PlaylistAddRoundedIcon />
                        </IconButton>
                        <Menu
                            id="extra-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            className={classes.extraMenu}
                            MenuListProps={{
                                'aria-labelledby': 'extra-menu-button',
                            }}
                        >
                            <MenuList className="list">
                                <Link href="/" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <CottageRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </MenuItem>
                                </Link>
                                <Link href="/services" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <ContentPasteRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Services" />
                                    </MenuItem>
                                </Link>
                                <Link href="/session-packages-and-pricing" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Inventory2RoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Sesion Packages & Pricing" />
                                    </MenuItem>
                                </Link>
                                <Link href="/schedule-and-pay" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <EventNoteRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Schedule & Pay" />
                                    </MenuItem>
                                </Link>
                                <Link href="/waiting-list" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PlaylistAddCheckRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Waiting List" />
                                    </MenuItem>
                                </Link>
                                <Link href="/terms-of-service-agreement" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <LocalPoliceRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Terms of Service Agreement" />
                                    </MenuItem>
                                </Link>
                                <Link href="/meeting-detail" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <CameraIndoorRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Meeting Details" />
                                    </MenuItem>
                                </Link>
                                <Link href="/cryptocurrency-learning" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <SchoolRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Crypto Currency Learning" />
                                    </MenuItem>
                                </Link>
                                <Link href="/team" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <GroupsRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Team" />
                                    </MenuItem>
                                </Link>
                                <Link href="/crypto-products" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <QrCodeRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Crypto Products" />
                                    </MenuItem>
                                </Link>
                                <Link href="/contact" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <SupportAgentRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Contact Us" />
                                    </MenuItem>
                                </Link>
                                <Link href="/employee" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <BadgeRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="For Exployees" />
                                    </MenuItem>
                                </Link>
                                <Link href="/customer-service" underline="none" color="inherit">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <VolunteerActivismRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Customer Service" />
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box className="extra">
                        <IconButton onClick={() => toggleDrawer()}>
                            <Badge badgeContent={4} color="secondary">
                                <LocalMallRoundedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ ml: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Container>
                <Drawer
                    open={openDrawer}
                    anchor="top"
                    className={classes.drawer}
                    onClose={() => toggleDrawer()}
                >
                    <Container>
                        <Box className="close-icon">
                            <Button
                                endIcon={<CloseRoundedIcon />}
                                variant="outlined"
                                color="secondary"
                                onClick={() => toggleDrawer()}
                            >
                                Close
                            </Button>
                            <Button
                                startIcon={<ShoppingCartCheckoutRoundedIcon />}
                                variant="contained"
                                color="secondary"
                                style={{
                                    marginLeft: 16
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Image</TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Package Option</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Box
                                            component="img"
                                            src="https://exwatch.templines.org/wp-content/uploads/revslider/home/s-white.png"
                                            alt="img"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        Personal Investor Pacakages
                                    </TableCell>
                                    <TableCell>
                                        Packages Options 10 Session Pa
                                    </TableCell>
                                    <TableCell align="right">
                                        $250000
                                    </TableCell>
                                    <TableCell align="right">
                                        2
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ borderBottom: "none" }} /> 
                                    <TableCell style={{ borderBottom: "none" }} />
                                    <TableCell style={{ borderBottom: "none" }} />
                                    <TableCell style={{ borderBottom: "none" }} align="right">
                                        Sub Total
                                    </TableCell>
                                    <TableCell style={{ borderBottom: "none" }} align="right">
                                        $500000
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Container>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Header;