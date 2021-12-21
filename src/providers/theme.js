import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import "../assets/scss/index.scss";

// ** Declare Theme Provider
const MaterialThemeProvider = ({ children }) => {

    const themeConfig = {
        palette: {
            mode: "dark",
            primary: {
                main: "#5ca7c3",
            },
            secondary: {
                main: "#455ee7"
            },
            background: {
                default: "#121227",
                paper: "#181837"
            },
            common: {
                black: "#121227",
                white: "#26264e"
            }
        },
        typography: {
            fontFamily: "'Oxanium', sans-serif",
            fontSize: 14,
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 4
                    }
                }
            },
        }
    };

    const theme = createTheme(themeConfig);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default MaterialThemeProvider;