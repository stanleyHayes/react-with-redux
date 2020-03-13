import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import store from "./redux/store";
import {Provider} from "react-redux";
import CompletedTodosPage from "./pages/CompletedTodosPages";
import UncompletedTodosPage from "./pages/UncompletedTodosPage";
import AllTodosPages from "./pages/AllTodosPages";
import CreateTodoPage from "./pages/CreateTodoPage";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/completed">
                        <CompletedTodosPage/>
                    </Route>

                    <Route path="/uncompleted">
                        <UncompletedTodosPage/>
                    </Route>

                    <Route path="/create">
                        <CreateTodoPage/>
                    </Route>


                    <Route path="/">
                        <AllTodosPages/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
