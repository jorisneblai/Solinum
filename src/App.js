import './App.css';
import './reset.css';
import { Routes, Route } from 'react-router-dom';
import Form from './Components/Form/Form';
import NavBar from './Components/NavBar/NavBar';
import PoiList from './Components/PoiList/PoiList';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<><NavBar/> <Form /></>} />
        <Route path="/poilist" element={<><NavBar/> <PoiList /></>} />
        <Route path="/map" element={<><NavBar/></>} />
      </Routes>
    </main>
  );
}

export default App;

