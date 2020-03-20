import React from "react";
import Layout from "../components/layout/Layout";
import {useDispatch} from "react-redux";
import {Container} from "@material-ui/core";
import CreateTodoForm from "../components/shared/CreateTodoForm";

function CreateTodoPage(props) {

    const dispatch = useDispatch();

    return (
        <Layout>
            <div style={{backgroundColor: "white"}}>
                <Container>
                    <CreateTodoForm dispatch={dispatch}/>
                </Container>
            </div>
        </Layout>
    )
}

export default CreateTodoPage;
