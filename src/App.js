import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';
import FirstToThirdSection from './components/FirstToThirdSection/FirstToThirdSection';
import FourthToSixthSection from './components/FourthToSixthSection/FourthToSixthSection';
import YouTube from './components/YouTube/YouTube'
// import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Alert/>
      <FirstToThirdSection />      
      <FourthToSixthSection />      
      <YouTube />
      <Footer/>      
    </div>
  );
}

export default App;
