import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        console.log("Lifecycle Inside constructor props: ");
        console.log(props);
        super(props);
        this.state = {
            favoritePropColor: props.favcolor,
            favoritecolor: "constructor-blue"
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle Inside getDerivedStateFromProps. props: ");
        console.log(props);
        console.log("Lifecycle Inside getDerivedStateFromProps.  state: ");
        console.log(state);
        return {
            favoritePropColor: props.favcolor,
            favoritecolor: state.favoritecolor
        };
    }
    componentDidMount() {
        document.getElementById("mount_id").style.display = "none";
        console.log("Lifecycle Inside componentDidMount");
        setTimeout(() => {
            console.log('Lifecycle Inside setTimeout');
            this.setState({ favoritecolor: "mount-green" })
        }, 1000)
    }

    shouldComponentUpdate() {
        console.log("Lifecycle Inside shouldComponentUpdate");
        return true;
    }
    componentDidCatch(error, errorInfo) {
        console.log("Lifecycle Inside componentDidCatch. error: ");
        console.log(error);
        console.log(errorInfo);
    }
    onMounting = (e) => {
        console.log("LifeCycle inside onMounting");
        this.setState({ favoritecolor: "onMounting-blue" });
        document.getElementById("mount_id").style.display = "block";
    }
    onUpdating = (e) => {
        console.log("LifeCycle inside onUpdating");
        this.setState({ favoritecolor: "onUpdating-blue" });
        var msg = `<h2>Updating</h2> React has five built-in methods that gets called, in this order when a component is updated:
        <p> 1. getDerivedStateFromProps()</p>
        <p> 2. shouldComponentUpdate()</p>
        <p> 3. render()</p>
        <p> 4. getSnapshotBeforeUpdate()</p>
        <p> 5. componentDidUpdate()</p>
        <p> The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
        <p>In the <b>shouldComponentUpdate()</b> method you can return a Boolean value that specifies whether React should continue with the rendering or not.</p>
    `
        document.getElementById("div_onupdate").innerHTML = msg;
        document.getElementById("div_unmount").innerHTML = "";
        document.getElementById("mount_id").style.display = "none";
    }
    onUnmount = () => {
        console.log("LifeCycle inside onUnmount");
        var msg = `<h2>Unmounting</h2><p>The componentWillUnmount method is called when the component </p><p>is about to be removed from the DOM</p>`
        document.getElementById("div_unmount").innerHTML = msg;
        document.getElementById("div_onupdate").innerHTML = "";
        document.getElementById("mount_id").style.display = "none";
        
    }


    render() {
        console.log("Lifecycle Inside render. ");
        return (
            <div>
                <h1>Lifecycle</h1>
                <p> My favoritecolor in props is {this.state.favoritePropColor}</p>
                <p> My favoritecolor in state is {this.state.favoritecolor}</p>
                <div>
                    <button onClick={this.onMounting}>Mounting</button>
                    <button onClick={this.onUpdating}>Updating</button>
                    <button onClick={this.onUnmount}> Unmount </button>

                    <div id="mount_id" style={{ "textAlign": "left" }}>

                        <dl>
                            <dt><h2>Mounting</h2></dt>
                            <dt>React has four built-in methods that gets called, in this order, when mounting a component:</dt>
                            <dd>1. constructor()</dd>
                            <dd>2. getDerivedStateFromProps()</dd>
                            <dd>3. render()</dd>
                            <dd>4. componentDidMount()</dd>
                        </dl>
                        <p> The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.</p>
                        <p>The getDerivedStateFromProps method is called right before the render method</p>
                    </div>
                    <div id="div_onupdate" style={{ "textAlign": "left" }}>
                    </div>
                    <div>
                        <div id="div_unmount" style={{ "textAlign": "left" }}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Lifecycle