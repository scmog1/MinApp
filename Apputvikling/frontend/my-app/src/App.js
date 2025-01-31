import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
