import React from "react"
import {render} from "react-dom"
import {mainRouter} from "./routes"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import App from "./App"


render(
    <Router>
        <Switch>
            <Route path="/admin" render={()=>{
                //这里可以验证用户有无登录
                return <App />
            }} />
            {
                mainRouter.map(route=>{
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
    </Router>,
    document.getElementById("root")
)