import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { AppProvider } from './context/AppContext';
import CatsPage from './pages/CatsPage/CatsPage';
import LittlePetsPage from './pages/LittlePetsPage/LittlePetsPage';
import DogsPage from './pages/DogsPage/DogsPage';
import SelectedProductPage from './pages/SelectedProductPage/SelectedProductPage';
import Footer from './components/Footer/Footer';
import EditingPage from './pages/EditingPage/EditingPage';

function App() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/little-pets" element={<LittlePetsPage />} />
        <Route path="/product/:productId" element={<SelectedProductPage />} />
        <Route path="/edit-product/:productId" element={<EditingPage />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

export default App;
