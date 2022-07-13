import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/About/AboutPage';
import HomePage from '../pages/Home/HomePage';

function Routeing() {
  return (
    // Path Route Section
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about-page" exact element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}

export default Routeing;
