import React, { Component } from 'react'

class RegComp extends Component {

    render() {
        console.log('Regular Component');
        return (
            <div>
                I'm the regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp;