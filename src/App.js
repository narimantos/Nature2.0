import { ReactComponent as Logo } from './assets/LoginButton.svg';
import { ReactComponent as Logout } from './assets/Logout.svg';
import './App.css';
import Web3 from 'web3';
import { motion, useMotionValue } from "framer-motion"
import { state } from "framer-motion"
import React, { Component, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
//const [addr, setAddr] = useState('')

const ethEnabled = () => {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    return true;
  }
  return false;
}

const isLoggedIn = (object) => {
if(object.state.gotMM)
{ 
  return true
}
else 
{
  console.log("NOT TRUE")

  return false
}
}
var web3

const ContainerVariants = {
  initial: {},
  animate: {}
};
const H1Variants = {
  initial: { x: -1000 },
  animate: { x: 0 },
  transition: {
    type: "tween",
    duration: 2,
    delay: 1
  }
}
const H2Variants = {
  initial: { y: -1000 },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 1,
    delay: .4
  }

}
const H3Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 }
}
const H4Variants = {
  initial: { scale: 1.4 },
  animate: { scale: 1.4 },
  transition: {
    type: "tween",
    duration: "4",
    delay: "1"
  }
}



class App extends Component {
  _isMounted = false;

  state = {
    account: "nothing",
    gotMM: 0
  }

  constructor(props) {
    super(props)
    this.state = { account: '',gotMM: '' }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log('setting state');
        this.render()
        return { unseen: "does not display" }
      });
    }, 1000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.account != nextProps.account
  }

  // changePageState(e){
  //   this.setState({ page: e.target.value });
  //   this.getPage();
  // }

  ethereum = window.ethereum

  if(ethereum) {
    ethereum.on('accountChanged',
      function (accounts) {
        this.setState.account = accounts[0]
      }
    )
  }

  async getMetaAccount() {
    web3 = new Web3(window.web3.currentProvider)
    var account = web3.eth.getAccounts().then(result => {
      console.log(result);
      this.setState({ account: result[0], gotMM: 1 })
    });
  
  }

  async logoutMeta()
  {
    this.setState({account: "undefined", gotMM: 0})
  }


  handelLoginClick(){}
  handelLogOutClick(){}
  render() {
    let button;





    return (
      <Router>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
       
             {isLoggedIn(this)   && <button onClick={this.logoutMeta.bind(this)}> <Logout className="App-Button" > sds </Logout>  </button> }  
             {!isLoggedIn(this)   && <button onClick={this.getMetaAccount.bind(this)}> <Logo className="App-Button" > sdasd  </Logo>  </button> }  
      
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
          <body >
       
              <h1>
                {isLoggedIn(this)   && <p> Hello, {this.state.account}  </p>}
                {!isLoggedIn(this)  && <p> Hello {this.state.account} please login </p>}
              </h1>
              <body>
              <div class="night"> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> <div class="shooting_star"></div> </div>
              </body>
          
            
      </body>

      
            </Router>
            
    );
  }
}

export default App;
