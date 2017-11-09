import React, { Component} from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    render(){
        return (
            <div>
                <h1>React Starter Boilerplate</h1>
                <p>You can now modify ./src/index.ejs</p>
            </div>
        );
    }
}

render(<App/>, document.getElementById('container'));