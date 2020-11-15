import {ReactComponent as Logo} from './assets/LoginButton.svg';
import './App.css';
import { motion } from "framer-motion"
import { state } from "framer-motion"
import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

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
  initial: { scale: 0.7 },
  animate: { scale: 1.7 },
  transition: {
    type: "tween",
    duration: "2",
    delay: "1"
  }
}

function App() {
  const ethereum = window.ethereum
  const [addr, setAddr] = useState('')
  if (ethereum) {
    ethereum.on('accountsChanged', function (accounts) {
      console.log(accounts[0])
      setAddr(accounts[0]);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          className="App"
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={H1Variants}>
            <div Hello>
              <h1 className="App-login">Hello user</h1>
            </div>
          </motion.h1>
          <motion.h2 variants={H2Variants}>
            <div User public key>
            <h1 className="App-Address"> {addr}</h1>
            </div>
          </motion.h2>
          <motion.h3 variants={H3Variants}>
            <div>STARSSSS</div>
          </motion.h3>
          <motion.h4 variants={H4Variants}>
            <div>STARSSSS</div>
            </motion.h4>
        </motion.div>
        <div Login button>
        <button> <Logo className='MetaLogin' /> </button>
        </div>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
