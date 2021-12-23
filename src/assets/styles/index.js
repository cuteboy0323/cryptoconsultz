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
        "&.transparent": {
            boxShadow: "none !important",
            backgroundColor: "transparent !important",
            backgroundImage: "none !important",
            transition: ".5s"
        },
        "&.animate-appbar": {
            backgroundColor: `${theme.palette.background.default} !important`,
            boxShadow: `${theme.shadows[4]} !important`,
            backgroundImage: `url(${require("../img/bg/space-bg.svg").default}) !important`,
            transition: ".5s"
        },
        "& .top-toolbar": {
            borderWidth: 0,
            borderColor: theme.palette.common.white,
            borderBottomWidth: 1,
            borderStyle: "solid",

            "& > div": {
                display: "flex",
                justifyContent: "space-between",
                zIndex: 1,

                "& a": {
                    textTransform: "none",
                    padding: theme.spacing(1),
                    lineHeight: theme.spacing(3)
                },

                "& svg": {
                    fontSize: theme.spacing(3),
                }
            }
        },

        "& .bottom-toolbar": {
            padding: theme.spacing(1.5),
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
            },
        }
    },
    extraMenu: {
        "& .list": {
            "& li": {
                padding: theme.spacing(1.5, 3)
            }
        }
    },
    footer: {
        backgroundColor: `${theme.palette.background.default} !important`,
        boxShadow: "none !important",
        backgroundImage: `url(${require("../img/bg/space-bg.svg").default}) !important`,
        borderColor: theme.palette.common.white,
        borderWidth: 0,
        borderTopWidth: 1,
        borderStyle: "solid",
        padding: theme.spacing(10, 0),

        "& .company-name": {
            fontFamily: "'grinddemolished'",
            fontSize: theme.spacing(3.5),
            marginBottom: theme.spacing(1)
        },
        "& .dividerOne": {
            width: "35%",
            marginBottom: theme.spacing(0.5)
        },
        "& .dividerTwo": {
            width: "40%"
        },
        "& ul": {
            "& li": {
                "& > div": {
                    borderRadius: theme.shape.borderRadius
                }
            }
        },
        "& hr": {
            marginBottom: theme.spacing(4),
            borderColor: theme.palette.common.white,

        }
    },
    title: {
        fontFamily: "'grinddemolished' !important",
        padding: theme.spacing(2, 0),
        paddingBottom: theme.spacing(5),
        position: "relative",
        "& span": {
            color: theme.palette.secondary.main
        },
        "&::before": {
            content: "''",
            position: "absolute",
            bottom: theme.spacing(3),
            left: 0,
            backgroundImage: `url(${require("../img/title_bar.png").default})`,
            width: 270,
            height: 13,
            backgroundRepeat: "no-repeat"
        }
    },
    titleCenter: {
        fontFamily: "'grinddemolished' !important",
        padding: theme.spacing(2, 0),
        paddingBottom: theme.spacing(5),
        position: "relative",
        textAlign: "center",
        "& span": {
            color: theme.palette.secondary.main
        },
        "&::before": {
            content: "''",
            position: "absolute",
            bottom: theme.spacing(2),
            left: "50%",
            transform: "translateX(-50%)",
            backgroundImage: `url(${require("../img/title_bar.png").default})`,
            width: 270,
            height: 13,
            backgroundRepeat: "no-repeat"
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
                background: "linear-gradient(360deg, rgb(18 18 39) 0%, rgba(0, 0, 0, .65) 70%)"
            },
            "& .logo-banner": {
                zIndex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    marginBottom: theme.spacing(6),
                    width: theme.spacing(25)
                },
                "& .title": {
                    fontFamily: "'grinddemolished'"
                },
                "& .sub-title": {
                    fontFamily: "'grinddemolished'"
                }
            }
        },
        "& .video": {
            "& > div": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: theme.spacing(4, 0),

                "& .chip-container": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    "& .chip": {
                        borderRadius: theme.shape.borderRadius,
                        fontSize: theme.spacing(2),
                        margin: theme.spacing(1, 1)
                    },
                },
                "& iframe": {
                    border: "none",
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[4],
                    marginBottom: theme.spacing(6)
                }
            }
        },
        "& .investment": {
            padding: theme.spacing(5, 0),

            "& ul": {
                "& li": {
                    "& > div": {
                        borderRadius: theme.shape.borderRadius,

                        "& .MuiListItemIcon-root": {
                            minWidth: theme.spacing(4)
                        },
                        "& .MuiListItemText-root": {
                            margin: theme.spacing(0.125, 0)
                        }
                    }
                }
            },
            "& .img-wrapper": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    height: "100%",
                    maxHeight: theme.spacing(50.5),
                }
            }
        },
        "& .business": {
            padding: theme.spacing(10, 0),

            "& ul": {
                "& li": {
                    "& > div": {
                        borderRadius: theme.shape.borderRadius,

                        "& .MuiListItemIcon-root": {
                            minWidth: theme.spacing(4)
                        },
                        "& .MuiListItemText-root": {
                            margin: theme.spacing(0.125, 0)
                        }
                    }
                }
            },
            "& .img-wrapper": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    height: "100%",
                    maxHeight: theme.spacing(50.5),
                }
            }
        },
        "& .voice": {
            "& iframe": {
                width: "100%",
                height: 180,
                border: "none",
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[4],
                marginBottom: theme.spacing(6)
            }
        },
        "& .partner": {
            paddingBottom: theme.spacing(10),
            "& .partner-link": {
                margin: theme.spacing(2, 0),
                boxShadow: theme.shadows[4],
                height: theme.spacing(15),
                "& img": {
                    height: "100%",
                }
            }
        }
    },
    services: {
        marginTop: theme.spacing(20),

        "& .services": {
            padding: theme.spacing(10, 0),

            "& .card": {
                padding: theme.spacing(2, 1),
                backgroundImage: "none",
                backgroundColor: "rgba(255, 255, 255, .05)",
                "& .title": {
                    fontFamily: "'grinddemolished'",
                    textAlign: "center",
                    paddingTop: theme.spacing(2),
                    marginBottom: theme.spacing(1)
                },
                "& .dOne": {
                    width: "45%",
                    marginLeft: "calc(50% - 45% / 2)",
                    marginBottom: theme.spacing(.5)
                },
                "& .dTwo": {
                    width: "50%",
                    marginLeft: "calc(50% - 50% / 2)",
                    marginBottom: theme.spacing(2)
                }
            }
        }
    },
    sessionPackages: {
        marginTop: theme.spacing(20),

        "& .session-packages": {
            padding: theme.spacing(10, 0),

            "& .sections": {
                paddingTop: theme.spacing(5),
                "& .multi-session": {
                    paddingTop: theme.spacing(10)
                },
                "& .return": {
                    paddingTop: theme.spacing(10)
                },
                "& .question": {
                    paddingTop: theme.spacing(10)
                },
                "& .grid": {
                    paddingTop: theme.spacing(5),

                    "& img": {
                        width: "100%",
                        borderRadius: theme.shape.borderRadius
                    },
                    "& .caption": {
                        textAlign: "center",
                        padding: theme.spacing(2)
                    },
                    "& .title": {
                        textAlign: "center",
                        paddingBottom: theme.spacing(2)
                    },
                    "& .schedule": {
                        "& .MuiListItemButton-root": {
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderRadius: theme.shape.borderRadius
                        },
                        "& button": {
                            marginTop: theme.spacing(3)
                        }
                    }
                }
            }
        }
    },
    team: {
        marginTop: theme.spacing(20),
        "& .team": {
            padding: theme.spacing(10, 0),

            "& img": {
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[4]
            },
            "& iframe": {
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[4]
            },

            "& .card": {
                padding: theme.spacing(2, 2),
                backgroundImage: "none",
                backgroundColor: "rgba(255, 255, 255, .05)",
                "& .title": {
                    fontFamily: "'grinddemolished'",
                    textAlign: "center",
                    paddingTop: theme.spacing(2),
                    marginBottom: theme.spacing(1)
                },
                "& .dOne": {
                    width: "75%",
                    marginLeft: "calc(50% - 75% / 2)",
                    marginBottom: theme.spacing(.5)
                },
                "& .dTwo": {
                    width: "80%",
                    marginLeft: "calc(50% - 80% / 2)",
                    marginBottom: theme.spacing(2)
                }
            }
        }
    },
    pageHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(10, 0),
        "& .title": {
            fontFamily: "'grinddemolished' !important",
            marginBottom: theme.spacing(2)
        }
    }
}));

export default useStyles;