import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main />} >
        <Route index element={<div>About US</div>} />
        <Route path='/artists' element={<div>Artists</div>} />

      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
