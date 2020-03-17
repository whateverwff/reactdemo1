import React, { Component } from 'react'
import {
    Frame
} from "./components"

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import {
    adminRouter
} from "./routes"

class App extends Component {
    render() {
        return (
            <>
                <Frame>
                    <Switch>
                        {
                            adminRouter.map(route => {
                                return (
                                    <Route 
                                        key={route.pathname}
                                        path={route.pathname}
                                        render={()=>{
                                            return <route.component {...route} />
                                        }}
                                    />
                                )
                            })
                        }
                        <Redirect to="/admin/tables" />
                    </Switch>
                </Frame>
            </>
        )
    }
}

export default App
