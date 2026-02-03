import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offer from './components/Offer';

/* ADIM 2? */

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        <Offer />
      </div>
      <Footer />
    </>
  );
}

export default App;
