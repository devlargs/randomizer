import React, { Component } from 'react';
import { render } from 'react-dom';

const config = {
    apiKey: "AIzaSyD6jixLE2E4eHWoUItYRqhEOjSkqUfISwo",
    authDomain: "randomer-e3399.firebaseapp.com",
    databaseURL: "https://randomer-e3399.firebaseio.com",
    projectId: "randomer-e3399",
    storageBucket: "randomer-e3399.appspot.com",
    messagingSenderId: "736888199930"
};

firebase.initializeApp(config);

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            loading: false,
            napili: ''
        }
    }
    
    randomize(){
        var list = ['Jerome', 'Harry nanaman', 'Mark', 'Gabriel', 'Karl', 'Josua', 'Randur', 'Harry']
        var rand = Math.floor(Math.random() * list.length);

        firebase.database().ref('users').set({
            bibili: {
                name: list[rand]
            }
        });
    }
    
    componentDidMount() {
        var self = this;
        firebase.database().ref('users').once('value').then(function(snapshot) {
            self.setState({
                napili: `Si ${snapshot.val().bibili.name} ang bibili.`
            })
        })

        var leadsRef = firebase.database().ref('users');
        var self = this;
        leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                self.setState({
                    napili: `Si ${childData.name} ang bibili.`
                })
            });
        });
    }

    render() {
        return (
            <div>
                    {
                        (localStorage.getItem('admin')) &&
                        <button onClick={() => this.randomize()}>PUMILI</button>
                    }

                    <h1>RANDOM SOME SHIT</h1>
                    <h2><b>{this.state.napili}</b></h2>
            </div>
        );
    }
}

render(<App />, document.getElementById('container'));