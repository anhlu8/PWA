import React from 'react';
import './App.css';
import video from "./videos/video1.mp4"
function App() {
  
  return (
    <div className="App">
      <header className="header">
        <h1>Art Videos</h1>
      </header>
      <br/>
      <div>
        <video src={video} controls height={200}/>
      </div>
    </div>
  );
}

export default App;
