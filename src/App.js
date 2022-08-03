import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Setup from './components/Setup';
import Usage from './components/Usage';
import Complete from './components/Complete'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome></Welcome>}></Route>
          <Route exact path="/setup" element={<Setup></Setup>}></Route>
          <Route exact path="/usage" element={<Usage></Usage>}></Route>
          <Route exact path="/complete" element={<Complete></Complete>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
