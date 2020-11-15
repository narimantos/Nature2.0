import { ReactComponent as Logo } from './assets/LoginButton.svg';
import { ReactComponent as Logout } from './assets/Logout.svg';
import './App.css';
import Web3 from 'web3';
import { motion, useMotionValue } from "framer-motion"
import { state } from "framer-motion"
import React, { Component, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';


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
    this.state = { account: 'NOT YET DEFINED',gotMM: 0 }
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
    this.setState({account: "Undifined", gotMM: 0})
  }


  handelLoginClick(){}
  handelLogOutClick(){}
  render() {
    let button;





    return (
      <div className="App">
        <header className="App-header">
          <motion.div
            className="App"
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={H2Variants}>
              <div>
                {isLoggedIn(this)   && <p> Hello, {this.state.account}  </p>}
                {!isLoggedIn(this)  && <p> Hello {this.state.account} please login </p>}
              </div>
            </motion.h2>
            <motion.h3 variants={H3Variants}>
              <div className="App-Stars">✰⋆🌟✪🔯✨</div >
            </motion.h3>
          </motion.div> <div >
             {isLoggedIn(this)   && <button onClick={this.logoutMeta.bind(this)}> <Logout className="App-Stars" >  </Logout>  </button> }  
             {!isLoggedIn(this)   && <button onClick={this.getMetaAccount.bind(this)}> <Logo className="App-Stars" >  </Logo>  </button> }  

          </div>
        </header>
      </div>
    );
  }
}

export default App;
