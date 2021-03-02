import './App.css';
import GameContainer from './components/Game/GameContainer';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
    <BrowserRouter> 
      <GameContainer />
    </BrowserRouter>
  );
}

export default App;
