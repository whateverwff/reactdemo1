import React from "react"
import { render } from "react-dom"
import { mainRouter } from "./routes"
import { Provider } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import store from "./store"

import App from "./App"


render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/admin" render={() => {
                    //这里可以验证用户有无登录
                    return <App />
                }} />
                {
                    mainRouter.map(route => {
                        return (
                            <Route
                                key={route.pathname}
                                path={route.pathname}
                                component={route.component}
                            />
                        )
                    })
                }
                <Redirect to="/admin" from="/"></Redirect>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
)