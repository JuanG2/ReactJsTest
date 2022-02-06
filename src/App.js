import './App.css';
import Buttonsigngoogle from './components/Buttonsigngoogle';
import Posts from './Pages/Posts';
import { useUserContext } from "./context/userContext";
import Auth from "./components/auth";


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? 
      <Posts /> 
      : <Auth />} </>}
    </div>
    );
 
}

export default App;
