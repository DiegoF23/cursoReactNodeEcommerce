import Home from './pages/Home';
import ConctactMe from './pages/ConctactMe';
import { Routes,Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import './App.css';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <div className='container'>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/contacto' element={<ConctactMe/>}/>
          <Route  path='/About' element={<AboutMe/>}/>
        </Routes>
      </div>
    </SnackbarProvider>
  );
}

export default App;
