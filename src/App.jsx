import { useEffect, useMemo, useState } from "react";


import { useWeb3 } from "@3rdweb/hooks";

const App = () => {

  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)


  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to SunyataDao</h1>
        <button onClick={() => connectWallet("injected")} className="button">
          Connect your wallet
        </button>
      </div>
    );

  }
  
 
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
};
const mySecret = process.env['w.info']

export default App;
