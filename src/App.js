import './App.css';
import Container from './components/Container';
import { TheFooter } from './components/TheFooter';
import { TheHeader } from './components/TheHeader';

function App() {
  return (
    <div className="App">
    <TheHeader/>
     <div className="mainApp">
    <Container/>
     </div>
     <TheFooter/>
    </div>
  );
}

export default App;
