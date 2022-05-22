import { Route, Routes } from 'react-router-dom';


import './App.css';
import NavBar from './components/NavBar';

import Home from './pages/Home';

function App() {
  return (
    <main>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/new' element={<NewMeetupsPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
        
    </main>
  );
}

export default App;
