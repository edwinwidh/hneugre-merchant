import React, { Component, Fragment } from 'react'
import MenuNavbar from './MenuNavbar'
import MenusList from './MenuList'

class MenuDashboard extends Component {
    render() {
        return (
            <Fragment>
                <MenuNavbar />
                <MenusList />
            </Fragment>
        )
    }
}

export default MenuDashboard