import { ReactComponent as Logo } from './assets/LoginButton.svg';
import './App.css';
import Web3 from 'web3';
import { motion } from "framer-motion"
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
    account: "nothing"
  }
  constructor(props) {
    super(props)
    this.state = { account: 'NOT YET DEFINED'}
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

if(ethereum)
{
  ethereum.on('accountChanged',
  function (accounts)
  {
    this.setState.account = accounts[0]
  }
  )
}

  async getMetaAccount() {
        web3 =  new Web3(window.web3.currentProvider)
        var account = web3.eth.getAccounts().then(result =>  
          {
              console.log(result);
              this.setState({account: result[0]})
          });
 
      console.log("Your Account IS = "+ this.state.account)
    }
   
  render() {
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
              Hello,  {this.state.account} 
              </div>
            </motion.h2>
            <motion.h3 variants={H3Variants}>
              <div>STARS</div>
            </motion.h3>
            <motion.h4 variants={H4Variants}>
              <div>STARS</div>
            </motion.h4>
          </motion.div>
            <button onClick={this.getMetaAccount.bind(this)}> <Logo/> </button>
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
