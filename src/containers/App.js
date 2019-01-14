import React, { Component } from "react";
import { Route, HashRouter } from 'react-router-dom';
import WholeMap from ".././Components/WholeMap/WholeMap"
import FindPlace from ".././Components/FindPlace/FindPlace"
import InfoPlace from ".././Components/InfoPlace/InfoPlace"
import Header from "../Components/Header/Header"
import Login from "../Components/Login/Login"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
    }
  }

  loginHendler = () => {
    const doesShowLogin = this.state.showLogin;
    this.setState({
      showLogin: !doesShowLogin
    });

  }
  render() {
    let login = null;
    if (this.state.showLogin) {
      login = <Login click={this.loginHendler} />
    }
    return (

      <div>
        <Header click={this.loginHendler}></Header>

        <WholeMap />
        <FindPlace />
        <InfoPlace />
        {login}

      </div>

    );
  }
}

export default App;
