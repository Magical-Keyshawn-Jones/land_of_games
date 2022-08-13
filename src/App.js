import './App.css';
import { KnuckleBones, HomePage } from './Storage/appExports'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main>

      <header className='navBar'>
        <h1>Games</h1>
        <nav>
          <Link to='/' className='link homeButton' >Home</Link>
          <Link to='/KnuckleBones' className='link' >KnuckleBones</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/KnuckleBones' element={<KnuckleBones/>} />
      </Routes>

    </main>
  );
}

export default App;