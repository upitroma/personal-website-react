import { Route, Routes } from 'react-router-dom';


import './App.css';
import TsParticles from './components/TsParticles';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <main>
      <TsParticles className="background"/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
    </main>
  );
}

export default App;
