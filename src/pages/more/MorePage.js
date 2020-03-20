import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, useMediaQuery} from "@material-ui/core";
import MoreMobilePage from "./MoreMobilePage";
import MoreDesktopPage from "./MoreDesktopPage";

function MorePage() {

    const mobileScreen = useMediaQuery('(max-width: 800px)');

    return (
        <Layout>
            <Container>
                {
                    (mobileScreen) ?
                        (<MoreMobilePage/>) :
                        (<MoreDesktopPage/>)
                }
            </Container>
        </Layout>
    )
}

export default MorePage;
