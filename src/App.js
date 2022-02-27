import './App.scss';
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header id='bokningssida-main-header' />
      <MainContainer />
      <Footer id='bokningssida-main-footer' />
    </div>
  );
}

export default App;
