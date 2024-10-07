import { Component } from "react";

export default class LifeCycleMethods extends Component {

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    getData = () => {
        console.log("Fetching data from server...")
    };


    render() {
        return (
            <div>
                <h3>Helo Mounting Methods</h3>
            </div>
        )
    }
}