import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} exact="true" />
        <Route path="/components" element={<Categories />} exact="true" />
      </Routes>
    </div>
  );
}

export default App;
