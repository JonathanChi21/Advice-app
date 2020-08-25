import React from 'react';
import axios from 'axios';
import './App.css';
import reload from './images/reload.png';

class App extends React.Component{
    state = {advice: ''};

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;

                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 class-name="heading">"{advice}"</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span><img src={reload} width="25" height="25" alt="reload"/></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;