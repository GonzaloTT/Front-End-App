import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Gyms from '../pages/Gyms';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <>
    <div className="page">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gyms" element={<Gyms />} />
    </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App
