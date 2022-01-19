import { useMoralis, useMoralisWeb3Api } from "react-moralis"
import {useEffect, useState} from "react"
import SafeBoxAvaxABI from "../ABIs/SafeBoxAvaxABI.json"
import contract from "../smartContracts/contracts.json"

function SafeBoxAvax() {
  const web3api = useMoralisWeb3Api();
  const [balance, setBalance] = useState(0);
  const [supply, setSupply] = useState(0);
  const [exchange, setExchange] = useState(0);
  const { user } = useMoralis();
  
  const options = {
    chain: "avalanche",
    function_name: "balanceOf",
    address: contract["SafeBoxAvax"],
    abi: SafeBoxAvaxABI,
    params: {account: user.get("ethAddress")}
  }
  useEffect(() => {
    web3api.native.runContractFunction(options).then(result => {
      setBalance(result)
    })
  },[])


  const options2 = {
    chain: "avalanche",
    function_name: "totalSupply",
    address: contract["SafeBoxAvax"],
    abi: SafeBoxAvaxABI
  }
  useEffect(() => {
    web3api.native.runContractFunction(options2).then(result => {
      setSupply(result);
    })
  },[])
  

  return (
    <div className="text-center text-white text-2xl p-5">
      <div>{`My cToken balance: ${balance}`}</div>
      <div>{`Total cToken supply: ${supply}`}</div>
      <div>{`My position percentage: ${balance/supply*100}%`}</div>
    </div>
  )
}

export default SafeBoxAvax
