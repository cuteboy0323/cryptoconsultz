import React from "react";
import useStyles from "../assets/styles";

const Container = ({ children }) => {
    const classes = useStyles();
    return (
        <main className={classes.base}>
            {children}
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </main>
    )
}

export default Container;