import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { AppProvider } from './context/AppContext';
import CatsPage from './pages/CatsPage/CatsPage';
import LittlePetsPage from './pages/LittlePetsPage/LittlePetsPage';
import DogsPage from './pages/DogsPage/DogsPage';
import SelectedProductPage from './pages/SelectedProductPage/SelectedProductPage';

function App() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/little-pets" element={<LittlePetsPage />} />
        <Route path="/product/:productId" element={<SelectedProductPage/ >} />
      </Routes>
    </AppProvider>
  );
}

export default App;
