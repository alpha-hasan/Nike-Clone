import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './components/Home';
import { Launch } from './components/Launch';
import { Navbar } from './components/Navbar';
import { LaunchIndex } from './components/LaunchIndex';
import { NotFound } from './components/NotFound';
import { LaunchShoe } from './components/LaunchShoe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='launch' element={<Launch />}>
          <Route path='/launch' element={<LaunchIndex />} />
          <Route path='air-jordan-1-zoom-racer-blue' element={<LaunchShoe />} />
          <Route path='air-jordan-3-valor-blue' element={<LaunchShoe />} />
          <Route path='jordan-mars-270-london' element={<LaunchShoe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;