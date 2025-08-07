import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-content">
        <Main />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;