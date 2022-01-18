import LoginBtn from "./LoginBtn"

function Welcome() {
  return (
    <div className='bg-gradient-to-r from-red-400 to-blue-900 h-screen w-full flex flex-col justify-start items-center'>

      <h1 className="text-white text-center font-bold text-4xl m-3 p-3 ">WELCOME TO ALPHA MANAGER-X</h1>

      <h3 className="text-white text-center font-semibold m-3 p-3">The World's First Automated Leverage Manager for Alpha Finance's Homora V2</h3>

      <LoginBtn />      
      
    </div>
  )
}

export default Welcome
