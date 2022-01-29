import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Artist from '../Artist/Artist';
import Artists from '../Artists/Artists';
import NotFound from '../NotFound/NotFound';
import Work from '../Work/Work';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:artist" element={<Artist />} />
          <Route path="/artists/:artist/:work" element={<Work />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
