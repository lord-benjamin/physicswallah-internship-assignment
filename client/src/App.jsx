import Header from './components/Header';
import Left from './components/Left';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Right from './components/Right';
import DataContextProvider from './context/DataContextProvider';

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className='font-poppins relative'>
          <Header />
          <Routes>
            <Route path='/internships/:id' element={<Right />} />
          </Routes>
          <Left />
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
