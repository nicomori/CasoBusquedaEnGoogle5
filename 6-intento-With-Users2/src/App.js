import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';

import BackendRest from './Components/BackendRest';

var varibleExample = "Vamo!";



class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      email: ''
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
      .then(result => {
        this.setState({email: result.user.email});
      })
      .catch(error => console.log(`Error acaaaa ${error.code}: ${error.message}`));

      //${varibleExample} = ${result.user.email};
      //window[varibleExample] = "juanaaa";

  }

  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} se fue`))
    .catch(error => console.log(`Error acaaaa ${error.code}: ${error.message}`));


  }





  renderLoginButton (){
    // si el usuario esta conectado
    if(this.state.user){
      //pepe.myFunction();
      return (
        <div>
            <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <p>Hola {this.state.user.displayName}!</p>
            <button onClick={this.handleLogout}>Salir</button>
            <BackendRest email={this.state.email}/>
        </div>
      )
    } else {
      return(
        <button onClick={this.handleAuth}>Login con google 211111</button>
      );
    }

    // si no esta conectado
  }









  playSong(){
    //alert('old number was: '+[varibleExample]+'');

      //window[varibleExample] = "juanaaa";
      varibleExample = "juanaaa";

      return(
      <div>
          <p>acaaaa5558899 {varibleExample}</p>
      </div>
      )
  };


  render() {
    return (
      <div className="App">
      <div className="App-header">

            <h2>vamooose_test_1</h2>

            <p className="App-intro">
              {this.renderLoginButton()}

            </p>



            {this.playSong()}



          </div>
      </div>



    );
  }
}

export default App;
