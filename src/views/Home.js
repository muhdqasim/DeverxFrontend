import React, { Component } from 'react'
import NavBar from '../components/NavBar'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navOptions: {}
        }
    }
    
    render() {
        return (
            <div>
                <h1> Homes</h1>
                <NavBar>

                </NavBar>
            </div>
        )
    }
}