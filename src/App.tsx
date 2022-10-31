import './App.css';
import './Responsive.css';
import { Routes, Route } from "react-router-dom"

import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>

        <Footer />
    </div>
  );
}

export default App;