import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home } from './components/Home';
import { Launch } from './components/Launch';
import { Navbar } from './components/Navbar';
import { LaunchIndex } from './components/LaunchIndex';
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
          <Route path='' element={<LaunchIndex />} />
          <Route path=':slug' element={<LaunchShoe />} />
          {/* <Route path='air-jordan-3-valor-blue' element={<LaunchShoe />} />
          <Route path='jordan-mars-270-london' element={<LaunchShoe />} /> */}
        </Route>
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  );
}

export default App;