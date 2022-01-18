import Navbar from "./Navbar"

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-red-400 to-blue-900 h-screen w-full text-center'>
    <Navbar />
    <h1>You are now logged in!</h1>
  </div>
  )
}

export default HomePage
