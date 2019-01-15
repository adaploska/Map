// import React, { Component } from "react";
// // import { Route, HashRouter } from 'react-router-dom';
// import WholeMap from ".././Components/WholeMap/WholeMap"
// import FindPlace from ".././Components/FindPlace/FindPlace"
// import InfoPlace from ".././Components/InfoPlace/InfoPlace"
// import Header from "../Components/Header/Header"
// import Login from "../Components/Login/Login"
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showLogin: false,

//     }
//   }


//   loginHendler = () => {
//     const doesShowLogin = this.state.showLogin;
//     this.setState({
//       showLogin: !doesShowLogin,

//     });

//   }
//   render() {
//     let login = null;
//     if (this.state.showLogin) {
//       login = <Login click={this.loginHendler} />
//     }

//     return (

//       <div>
//         <Header click={this.loginHendler}></Header>
//         <WholeMap />
//         <FindPlace />
//         <InfoPlace />
//         {login}
//       </div>

//     );
//   }
// }

// export default App;


import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "../components/layouts/Navbar/Navbar"
import Dashboard from "../components/dashboard/Dashboard/Dashboard";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import AddPlace from "../components/projects/AddPlace/AddPlace";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch >
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/addplace" component={AddPlace} />

                    </Switch>
                </div>

            </BrowserRouter>
        )

    }
}
export default App