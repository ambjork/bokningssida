import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className="App">
      <Header id='bokningssida-main-header' />
      <div id='bokningssida-main-body'>
      </div>
      <Footer id='bokningssida-main-footer' />
    </div>
  );
}

export default App;
