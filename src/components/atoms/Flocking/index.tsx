import React, { useEffect, useState } from 'react';
import p5Types from 'p5'; //Import this for typechecking and intellisense
import Boid from './Boid';
import loadable from '@loadable/component';

const Sketch = loadable(() => import('react-p5'));

const Index = () => {
  const [flock, setFlock] = useState<Boid[]>([]);
  const [mults, setMults] = useState<{ al: number; coh: number; sep: number }>({ al: 1, coh: 1, sep: 1 });
  // const [mySvg, setMySvg] = useState<p5Types.Image>();

  // const preload = (p5: p5Types) => {
  //   setMySvg(p5.loadImage('./assets/insect.svg'));
  // };

  useEffect(() => {
    setInterval(() => {
      setMults({
        al: Math.random(),
        coh: Math.random(),
        sep: Math.random(),
      });
    }, 5000);
  }, []);

  const setup = (p5: p5Types, canvasParentRef: HTMLCanvasElement) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);

    window.addEventListener('resize', () => p5.resizeCanvas(window.innerWidth, window.innerHeight));

    p5.angleMode(p5.DEGREES);
    for (let i = 0; i < 100; i++) {
      setFlock((state) => [...state, new Boid({ p5: p5 })]);
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(2, 83, 0, 130);

    for (let boid of flock) {
      boid.edges();
      boid.flock(flock, mults.al, mults.coh, mults.sep);
      boid.update();
      boid.show(
        p5
        //, mySvg
      );
    }
  };

  //@ts-ignore
  return <Sketch setup={setup} draw={draw} />;
};

export default Index;
