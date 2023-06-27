import './assets/scss/style.scss'
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' Component={LandingPage}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
