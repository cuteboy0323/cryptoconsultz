import React from "react";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

import useStyles from "../assets/styles";

import Logo from "../assets/img/logo.png";

const Header = () => {
    const classes = useStyles();

    const [activeTab, setActiveTab] = React.useState(0);

    const handleActiveTab = (e, newTab) => {
        setActiveTab(newTab);
    };

    return (
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className="top-toolbar">
                <Container>
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
                </Container>
            </Toolbar>
            <Toolbar className="bottom-toolbar">
                <Container>
                    <Box className="logo">
                        <Box component="img" src={Logo} alt="logo" />
                        <Typography sx={{ ml: 2 }}>
                            CryptoConsultz
                        </Typography>
                    </Box>
                    <Box className="space" />
                    <Box className="menu">
                        <Button color="inherit" sx={{ m: 1 }}>
                            Home
                        </Button>
                        <Button color="inherit" sx={{ m: 1 }}>
                            Services
                        </Button>
                        <Button color="inherit" sx={{ m: 1 }}>
                            Schedule
                        </Button>
                        <Button color="inherit" sx={{ m: 1 }}>
                            Meeting
                        </Button>
                        <IconButton sx={{ m: 2 }}>
                            <PlaylistAddRoundedIcon />
                        </IconButton>
                    </Box>
                    <Box className="extra">
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <LocalMallRoundedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ ml: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header;