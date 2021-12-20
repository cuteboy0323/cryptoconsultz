import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    base: {
        minHeight: "calc(100% - 238px)",
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        paddingBottom: theme.spacing(4),
        backgroundImage: `url(${require("../img/bg/space-bg.svg").default})`
    },
    appbar: {
        // backgroundColor: `${theme.palette.background.default} !important`,
        boxShadow: "none !important",
        // backgroundImage: `url(${require("../img/bg/space-bg.svg").default}) !important`,
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",

        "& .top-toolbar": {
            borderColor: theme.palette.common.white,
            borderWidth: 1,
            borderStyle: "solid",

            "& > div": {
                display: "flex",
                justifyContent: "flex-end",
                zIndex: 1
            }
        },

        "& .bottom-toolbar": {
            paddingTop: theme.spacing(2),
            "& > div": {
                display: 'flex',
            },
            "& .logo": {
                display: "flex",
                alignItems: "center",
                "& img": {
                    height: theme.spacing(6.5),
                },
            },
            "& .space": {
                flexGrow: 1
            },
            "& .menu": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: theme.spacing(80),
                padding: theme.spacing(0, 2)
            },
            "& .extra": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },
    home: {
        "& .hero": {
            padding: theme.spacing(10, 0),
            background: `url(${require("../img/bg/main.jpg").default})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: theme.spacing(15),
            "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(360deg, rgb(18 18 39) 0%, #12122700)"
            },
            "& .logo-banner": {
                zIndex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    marginBottom: theme.spacing(3)
                },
                "& .title": {
                    fontWeight: "bold"
                }
            }
        }
    }
}));

export default useStyles;