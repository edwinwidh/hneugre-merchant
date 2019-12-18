import React, { Component, Fragment } from 'react'
import SettingsNavbar from './SettingsNavbar'
import SettingsList from './SettingsList'

class SettingsDashboard extends Component {
    render() {
        return (
            <Fragment>
                <SettingsNavbar />
                <SettingsList />
            </Fragment>
        )
    }
}

export default SettingsDashboard