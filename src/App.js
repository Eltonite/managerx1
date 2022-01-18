import logo from './logo.svg';
import './App.css';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='font-bold'>DIVE INTO WEB 3</h1>
        <div className='flex flex-row gap-5'>
          <a className='hover:bg-slate-900 hover:rounded-lg px-2' 
          href="https://reactjs.org"
          target="_blank">React</a>
          <p>/</p>
          <a className='hover:bg-slate-900 hover:rounded-lg px-2' 
          href="https://tailwindcss.com"
          target="_blank">TailwindCSS</a>
          <p>/</p>
          <a className='hover:bg-slate-900 hover:rounded-lg px-2' 
          href="https://moralis.io"
          target="_blank">Moralis</a>
        </div>

        <div className='flex flex-row text-center gap-10 mt-8'>
          <LoginBtn />
          <LogoutBtn />
        </div>

      </header>
    </div>
  );
}

export default App;
