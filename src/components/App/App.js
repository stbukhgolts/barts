import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Artist from '../Artist/Artist';
import Artists from '../Artists/Artists';
import NotFound from '../NotFound/NotFound';
import Work from '../Work/Work';
import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUs/AboutUs';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:artist" element={<Artist />} />
            <Route path="/artists/:artist/:work" element={<Work />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
