import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useMoralis } from "react-moralis"


function LoginBtn() {
  const { authenticate, isAuthenticated } = useMoralis();

  return (
    <div className="bg-slate-600 rounded-xl p-2 w-24 text-base">
      <button 
      onClick={() => authenticate()}
      disabled={isAuthenticated}>
        LOGIN
      </button>
    </div>
  )
}

export default LoginBtn
