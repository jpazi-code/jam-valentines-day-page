// src/App.jsx
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  return (
    <>
      <h1 className="flex flex-col justify-center">will u be my valentuzz?</h1>

      <div className="flex flex-row gap-4 mt-4 justify-center">
        <Button
          to="/YAYYY2"
          className="text-lg bg-red-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
        >
          Yes
        </Button>
        <Button
          to="/bro-cmonn"
          className="text-lg bg-gray-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
        >
          No
        </Button>
      </div>
    </>
  );
}

export default App;
