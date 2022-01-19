import { useNativeBalance } from "react-moralis"


function Balances() {

  const { data: balance } = useNativeBalance();

  return (
    <div className="rounded-xl border-2 px-3">
      {balance.formatted}
    </div>
  )
}

export default Balances
