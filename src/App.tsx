import './App.css';
import Navbar from './components/Navigation/Navbar';
import MainContent from './pages/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <MainContent />
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
