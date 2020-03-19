import React, {Component} from 'react'
import {connect} from "react-redux"
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

const mapStateToProps = (state) => {
    return {
        ...state.login_reducer
    }
}
@connect(mapStateToProps)
class App extends Component {
    render() {
        return (
            this.props.islogin
            ?
            <Frame>
                <Switch>
                    {
                        adminRouter.map(route => {
                            return (
                                <Route
                                    key={route.pathname}
                                    path={route.pathname}
                                    render={() => {
                                        return <route.component {...route} />
                                    }}
                                />
                            )
                        })
                    }
                    <Redirect to="/admin/tables"/>
                </Switch>
            </Frame>
            :
            <Redirect to='/login'/>
        )
    }
}

export default App
