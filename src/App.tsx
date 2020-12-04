import React, { DetailedHTMLProps, useRef } from 'react';
import './App.scss';
import Nike from './assets/nikep6000.png';
function App() {
  const card = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const nike = useRef<HTMLImageElement>(null);
  const buy = useRef<HTMLButtonElement>(null);
  const details = useRef<HTMLHeadingElement>(null);
  const sizes = useRef<HTMLDivElement>(null);
  const moveContainer = (e: React.MouseEvent) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.current!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const startAnimation = (e: React.MouseEvent) => {
    card.current!.style.transition = `none`;
    title.current!.style.transform = `translateZ(150px)`;
    buy.current!.style.transform = `translateZ(150px)`;
    details.current!.style.transform = `translateZ(150px) rotateZ(15deg)`;
    sizes.current!.style.transform = `translateZ(200px)`;
    nike.current!.style.transform = `translateZ(150px)  rotateZ(-45deg)`;
  };

  const quitAnimation = (e: React.MouseEvent) => {
    card.current!.style.transition = `all 0.5s ease`;
    card.current!.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.current!.style.transform = `translateZ(0px)`;
    buy.current!.style.transform = `translateZ(0px)`;
    details.current!.style.transform = `translateZ(0px) rotateZ(0deg)`;
    sizes.current!.style.transform = `translateZ(0px) rotateZ(0deg)`;
    nike.current!.style.transform = `translateZ(0px)`;
  };

  return (
    <div
      onMouseMove={moveContainer}
      onMouseLeave={quitAnimation}
      onMouseEnter={startAnimation}
      className="container"
    >
      <div ref={card} className="card">
        <div className="nike">
          <div className="circle" />
          <img ref={nike} src={Nike} alt="p6000" />
        </div>
        <div className="info">
          <h1 ref={title} className="title">
            Nike P6000
          </h1>
          <h3 ref={details}>Just do it. RETRO</h3>
          <div ref={sizes} className="sizes">
            <button>39</button>
            <button>40</button>
            <button className="active">41</button>
            <button>42</button>
          </div>
          <div className="buy">
            <button ref={buy}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
