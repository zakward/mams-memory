// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import bohoBg from './assets/images/boho-bg.jpg'; // Adjust path if needed
import './App.css'; // If needed for custom styles

function App() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${bohoBg})`, backgroundBlendMode: 'multiply' }} // Optional blend for readability
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;