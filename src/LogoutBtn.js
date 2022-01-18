import { useMoralis } from "react-moralis"


function LogoutBtn() {
  const { logout, isAuthenticated } = useMoralis();

  return (
    <div className="bg-slate-600 rounded-xl p-2 w-24 text-base">
      <button 
      onClick={() => logout()}
      disabled={!isAuthenticated}>
        LOGOUT
      </button>
    </div>
  )
}

export default LogoutBtn
