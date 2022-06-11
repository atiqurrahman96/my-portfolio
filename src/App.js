
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

import About from './shared/About';
import Blogs from './shared/Blogs';
import Header from './shared/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
