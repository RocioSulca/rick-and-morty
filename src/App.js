import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Character from './components/Character';
import Notfound from './components/Notfound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/character/:id' element={<Character></Character>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
