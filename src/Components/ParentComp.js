import React, { Component } from 'react'
import RegComp from "./RegComp.js"
import PureComp from "./PureComp.js"
class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Myluck"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Myluck"
            })
        }, 3000);
    }

    render() {
        console.log('Parent Component');
        return (
            <div>
                I'm the parent component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;