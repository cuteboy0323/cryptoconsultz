import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import useStyles from "../assets/styles";

const Products = () => {
    const classes = useStyles();

    return (
        <Box className={classes.products}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Crypto Products
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Crypto Products
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="products">
                    <Link href="https://www.ledgerwallet.com/r/7530" underline="none" target="_blank">
                        <Button variant="contained" color="secondary" size="large" fullWidth>
                            Order Your Ledger ( Direct From Manufacturer )
                        </Button>
                    </Link>
                    <Box component="br" />
                    <Box component="br" />
                    <video autoPlay loop muted poster="https://www.ledger.com/wp-content/themes/ledger-v2/public/images/homepage/home-hero-ledger.jpg" className="background-video" id="background-video">
                        <source src="https://cdn.shopify.com/s/files/1/2974/4858/files/home-hero-mobile.webm?v=1637155649" type="video/webm" />
                        <source src="https://cdn.shopify.com/s/files/1/2974/4858/files/home-hero-mobile.mp4?v=1637155649" type="video/mp4" />
                        <source src="https://cdn.shopify.com/s/files/1/2974/4858/files/home-hero-mobile.mov?v=1637155649" type="video/mov" />
                    </video>
                    <Box component="br" />
                    <Box component="br" />
                    <iframe
                        width="100%"
                        src="https://www.youtube.com/embed/ZJpH-MEBP3k"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Box component="br" />
                    <Box component="br" />
                    <Link href="http://coldstoragecoins.myshopify.com/?rfsn=1288424.0ad3e" underline="none" target="_blank">
                        <Button variant="contained" color="secondary" size="large" fullWidth>
                            Order Cold Storage Coin
                        </Button>
                    </Link>
                    <Box component="br" />
                    <Box component="br" />
                    <Box className="coupon-code">
                        Use Coupon Code <Box component="b">REKT</Box> for 25% off at checkout on all Cold Storage Coin Purchases!
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Products;