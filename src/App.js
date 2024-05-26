import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Details/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:productId' element={<Details />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
