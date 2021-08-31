import React, { Component } from 'react'
import bellA from './bellA.png'
import bellB from './bellB.png'
class NewComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message : "Subscribe to Myluck",
            sub: "Subscribe",
            imageURL: bellA
        };
    }

    styles = {
        fontStyle: "italic",
        color: "blue"
    }

    buttonChange=()=> {
        this.setState ({
            message : "Hit the bell button to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange=()=> {
        this.setState ({
            imageURL: bellB,
            message: "Thank you!"
        })
    }

    render() {
 
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.buttonChange}>{this.state.sub}</button>
                <br/>
                <img width="30" src={this.state.imageURL} alt="" onClick={this.imageChange} />
            </div>
        )
    }
}

export default NewComp;