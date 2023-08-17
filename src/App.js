import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} exact="true" />
      <Route path="/components" element={<Categories />} exact="true" />
    </Routes>
  );
}

export default App;
