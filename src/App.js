import logo from './logo.svg';
import './App.css';
import Buttonsigngoogle from './components/Buttonsigngoogle';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Buttonsigngoogle text={"SignIn"}></Buttonsigngoogle>
    </div>
  );
}

export default App;
