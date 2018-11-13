import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){

    firebase.auth().onAuthStateChanged(user=> {
      this.setState({ user });
    });
  }

  handleAuth (){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error acaaaa ${error.code}: ${error.message}`));
  }

  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} se fue`))
    .catch(error => console.log(`Error acaaaa ${error.code}: ${error.message}`));
  }




  renderLoginButton (){
    // si el usuario esta conectado
    if(this.state.user){
      return (
        <div>
            <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <p>Hola {this.state.user.displayName}!</p>
            <button onClick={this.handleLogout}>Salir</button>
        </div>
      )
    } else {
      return(
        <button onClick={this.handleAuth}>Login con google 211111</button>
      );
    }

    // si no esta conectado
  }



  render() {
    return (
      <div className="App">
      <div className="App-header">

            <h2>vamooose_test_1</h2>

            <p className="App-intro">
              {this.renderLoginButton()}
            </p>
          </div>
      </div>



    );
  }
}

export default App;
