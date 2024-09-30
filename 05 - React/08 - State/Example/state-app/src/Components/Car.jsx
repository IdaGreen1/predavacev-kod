import { Component } from "react";

export default class Car extends Component {
    state= {
        brand: 'Ford',
        model: 'Mustang',
        color: 'Red',
        year: '1964'
    }
    changeState = () => {
    console.log('Aplication state changed!');

    this.setState({ model:'Fiesta', color: 'blue', year:'2021'});

}
    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>The selected car is {this.state.brand} from {this.state.year}. The color of the car is {this.state.color}.</p>
                <button onClick={this.changeState}>Change the car</button>
            </div>
        )
    }
}