import React from 'react';
import axios from 'axios';


class Fibonacci extends React.Component{
    state = {
        seenIndexes: [],
        values: {},
        index: '',
    };

    componentDidMount(){
        this.fetchValues();
        this.fetchIndexes();
    }

    fetchValues = async () => {
        const values = await axios.get("api/values/current/");
        this.setState({
            values: values.data,
        });
    }

    fetchIndexes = async () => {
        const indexes = await axios.get("api/values/");
        this.setState({
            seenIndexes: indexes.data,
        });
    }

    calculateFib = async (evt) => {
        evt.preventDefault();

        await axios.post("api/values/",{
            index: this.state.index
        });
        this.setState({index: ''});
        this.fetchIndexes();
        this.fetchValues();
    }

    renderValues = () => {
        const entries = [];

        for (let key in this.state.values){
            entries.push(
                <li key={key}>
                    Index: {key} ----- Fib: {this.state.values[key]}
                </li>
            )
        }
        return entries;
    }

    render(){
        return (
            <div className="App-header">
                <h1>Fibonacci</h1>
                <form onSubmit={this.calculateFib}>
                    <input 
                        name="number"
                        type="number"
                        placeholer="Put your number here"
                        value={this.state.index}
                        onChange={evt => this.setState({index: evt.target.value})}
                    />
                    <input type="submit" value="Calculate"/>
                </form>

                <h3>Indicies I have seen</h3>
                    {this.state.seenIndexes.map(({ number }) => number).join(", ")}
                <h3>Calculated values</h3>
                <ul>
                    {this.renderValues()}
                </ul>
            </div>
        )
    }
}


export default Fibonacci