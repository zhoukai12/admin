import React, { Component, Fragment } from 'react'
import AsideMenu from 'components/asideMenu/index'
import './aside.scss'
class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment >
                <h1 className='logo'><span></span></h1>
                <AsideMenu />
            </Fragment>
        );
    }
}

export default Aside;