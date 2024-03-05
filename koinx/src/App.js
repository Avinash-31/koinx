import './App.css';
import { Route } from 'react-router-dom';
import home from './pages/home';

function App() {
  return (
    <div className="App">
      <Route path = '/' component = {home} exact/>
    </div>
  );
}

export default App;
