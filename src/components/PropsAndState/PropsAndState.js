import React, { Component } from 'react';

class PropsAndState extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Click Here'
        }
    }
    onClickChange = (e) => {
        console.log("inside onClickChange");
        this.setState({
            message: 'Thanks for clicking'
        })
    }
    render() {
        return (
            <div>
                <h1>This is PropsAndState</h1>
                <label>This is {this.props.prop1}, (passed from Component) </label><br></br>
                <label>{this.state.message}</label><br/>
                <button onClick={this.onClickChange}>Click here for change</button>
            </div>
        )
    }
}
export default PropsAndState