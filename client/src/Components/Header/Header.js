import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const Header = () => {
    return (
        <div>
            <AppBar>
                <ToolBar >
                    <Typography
                        variant="h6"
                        color="inherit"
                    >
                        WELCOME TO MERN TODO APP
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header;