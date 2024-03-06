import './intro.scss'
import {init} from 'ityped';
import { useEffect, useRef} from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed:60,
      strings: ["Inventor", "Scientist", "Creator"],
    });
  }, []);
  
  return (
    <div className='intro' id = 'intro'>  
      <div className='left'>
          <div className='imgContainer'>
              <img src='assets/man.png' alt = ""/>
          </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ironman</h1>
          <h3>
            American <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}


// 1. add left and right without textRef
// 2. introduce ityped, react Effect and Hook ref 
// 3. implement ityped, react Effect and Hook ref 
// 4. remove the repeating effect by remove <React.StrictMode> in index.js