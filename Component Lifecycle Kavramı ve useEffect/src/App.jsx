import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar />
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
