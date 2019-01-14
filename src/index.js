import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC3OXSjJLsEp9dxC_8IwPC_8VKS9ljLNRU",
  authDomain: "mapa-5c30a.firebaseapp.com",
  databaseURL: "https://mapa-5c30a.firebaseio.com",
  projectId: "mapa-5c30a",
  storageBucket: "mapa-5c30a.appspot.com",
  messagingSenderId: "737843525394"
};

const fire = firebase.initializeApp(config);
ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById('root'));
serviceWorker.unregister();
export default fire