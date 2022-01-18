import { useMoralis } from 'react-moralis';
import './App.css';
import HomePage from './components/HomePage';
import Welcome from './components/Welcome';

function App() {

  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return(
      <Welcome />
    )
  }

  return (
    <HomePage />
  );
}

export default App;
