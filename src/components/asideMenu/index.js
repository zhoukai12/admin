import React, { Component, Fragment } from 'react';
import Router from 'router/index'
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;
class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: [],
            collapsed: false,
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    
    componentDidMount() {
        const { pathname } = this.props.location;
        const openKeysList = pathname.split('/');
        const openKeys = openKeysList.slice(0, openKeysList.length - 1).join('/')
        const menuHigh = {
            selectedKeys: pathname,
            openKeys: openKeys
        }
        this.selectMenuHigh(menuHigh)
    }

    // 选择菜单
    selectMenu = ({ item, key, keyPath, domEvent }) => {
        const menuHigh = {
            selectedKeys: key,
            openKeys: keyPath[keyPath.length - 1]
        }
        this.selectMenuHigh(menuHigh)
    }

    openMenu = (openKeys) => {
        this.setState({
            openKeys: openKeys
        })
    }

    // 菜单高光
    selectMenuHigh = ({ selectedKeys, openKeys }) => {
        this.setState({
            selectedKeys: [selectedKeys],
            openKeys: [openKeys]
        })
    }

    // 渲染无子集的菜单
    renderMenu = ({ key, title }) => {
        return (
            <Menu.Item key={key} >
                <Link to={key}><span>{title}</span></Link>
            </Menu.Item>
        )
    }

    // 渲染有子集的菜单
    renderSubMenu = ({ key, title, children }) => {
        return (
            <SubMenu key={key} title={title}>
                {
                    children && children.map((item) => {
                        return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }
    render() {
        let { selectedKeys, openKeys } = this.state;
        return (
            <Fragment >
                <Menu
                    theme="dark"
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    onOpenChange={this.openMenu}
                    onClick={this.selectMenu}
                    mode="inline">
                    {
                        Router && Router.map((item) => {
                            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                        })
                    }
                </Menu>
            </Fragment>
        );
    }
}

export default withRouter(AsideMenu);