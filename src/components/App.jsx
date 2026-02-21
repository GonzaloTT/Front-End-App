import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Gyms from './GymsMain/Gyms';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <>
    <div className="page">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/gyms" element={<Gyms />} />
    </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App
