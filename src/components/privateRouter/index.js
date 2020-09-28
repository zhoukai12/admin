import React from 'react'
import { Route } from 'react-router-dom'
const PrivateRouter = ({ component: Component, ...reset }) => {
    return (
        <Route
            {...reset}
            render={rootProps => (
                <Component {...rootProps} />
            )}
        >
        </Route>
    )
}
export default PrivateRouter;