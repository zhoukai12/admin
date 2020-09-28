import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRouter from 'components/privateRouter/index'
import Components from './components'

class ContainerMain extends Component {
    render() {
        return (
            <Switch>
                {
                    Components.map((item) => {
                        return <PrivateRouter exact key={item.path} path={item.path} component={item.component}></PrivateRouter>
                    })
                }

            </Switch >
        );
    }
}
export default ContainerMain;
