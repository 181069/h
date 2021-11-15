import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'

function App() {
  const [val, setVal] = React.useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<FirstPage  onChange={(e) => {
            if (parseInt(e.target.value) <= 0) {
              alert("Value must be more than 0");
              return;
            }
            console.log(e.target.value);
            setVal(parseInt(e.target.value))
          }} />} />
          <Route path="/images" element={<SecondPage val={val} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
