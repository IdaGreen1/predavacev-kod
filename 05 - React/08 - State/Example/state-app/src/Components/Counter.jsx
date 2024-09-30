import { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0
    }

        changeState = () => {
            this.setState({ count: this.state.count + 1})
        }
    render() {
        return(
        <div>
        <h1>Counter: {this.state.count}</h1>
        <ChildCounter count= {this.state.count}/>
          <button onClick={this.changeState}>Increase Count</button>
        </div>
        ) 

    }
}

function ChildCounter({count}) {
    return(
        <div>
          <p>Number Of Clicks: {count}</p>
          
        </div>
    )
}