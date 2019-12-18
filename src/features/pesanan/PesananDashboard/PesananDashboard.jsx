import React, { Component, Fragment } from 'react'
import PesananNavbar from '../PesananNavbar'
import PesananList from '../PesananList/PesananList'

class PesananDashboard extends Component {
    render() {
        return (
            <Fragment>
                <PesananNavbar />
                <PesananList />
            </Fragment>
        )
    }
}

export default PesananDashboard