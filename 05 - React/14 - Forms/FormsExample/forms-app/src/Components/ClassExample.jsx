import { Component } from 'react';

export default class ClassExample extends Component {
    
        state = {
            value: 'Placeholder',
        };

        changeValue = (e) => {
            this.setState({ value: e.target.value });
        };

        handleSubmit = (e) => {
            e.prevent.default();
            alert(this.state.value);
        };
        
        render() {

        return(
            <div>
                <h1>ClassExample</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    value={this.state.value}
                    onChange={this.changeValue} 
                    />
                    <button type='submit'>Submit Data</button>
                </form>
            </div>
        )
    }
}