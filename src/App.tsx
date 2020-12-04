import React, { DetailedHTMLProps, useRef } from 'react';
import './App.scss';
import Nike from './assets/nikep6000.png';
function App() {
  const card = useRef<HTMLDivElement>(null);

  const moveContainer = (e: React.MouseEvent) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.current!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  return (
    <div onMouseMove={moveContainer} className="container">
      <div ref={card} className="card">
        <div className="nike">
          <div className="circle" />
          <img src={Nike} alt="p6000" />
        </div>
        <div className="info">
          <h1 className="title">Nike P6000</h1>
          <h3>Just do it. RETRO</h3>
          <div className="sizes">
            <button>39</button>
            <button>40</button>
            <button className="active">41</button>
            <button>42</button>
          </div>
          <div className="buy">
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
