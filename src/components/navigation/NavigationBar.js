import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {useMediaQuery} from "@material-ui/core";

import "../../App.css";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";

function NavigationBar(props) {

    const mobileScreen = useMediaQuery('(max-width: 800px)');

    return (
        <AppBar variant="elevation" elevation={2}>
            {
                (mobileScreen) ?
                    (<MobileNavigationHeader/>) :
                    (<DesktopNavigationHeader/>)
            }
        </AppBar>
    )
}

export default NavigationBar;
