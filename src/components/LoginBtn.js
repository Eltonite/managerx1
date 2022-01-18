import { useMoralis } from "react-moralis"

function LoginBtn() {
  const { authenticate } = useMoralis();

  return (
    <div className="text-gray-300 border-gray-300 hover:text-black hover:border-black hover:bg-gray-300 rounded-xl border-2 text-center p-2 w-24 text-base">
      <button 
      onClick={() => authenticate()}>
        LOGIN
      </button>
    </div>
  )
}

export default LoginBtn
