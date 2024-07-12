
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setcount]=useState(0);
  const handleclick=()=>{
    setcount(count=>count+1);
  }
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleclick}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
