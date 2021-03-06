import { useMoralis } from "react-moralis"

function LoginBtn() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-slate-600 rounded-xl p-2 w-24 text-base">
      <button 
      onClick={() => authenticate()}>
        LOGIN
      </button>
    </div>
  )
}

export default LoginBtn
