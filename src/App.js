import './App.css';
import { useState, useEffect } from 'react'
import homepagePhoto1 from './assets/images/home1-pb.png'
import homepagePhoto2 from './assets/images/home2-pb.png'
import concertPhoto1 from './assets/images/concert1.png'
import concertPhoto2 from './assets/images/concert2.png'
import concertPhoto3 from './assets/images/concert3.png'
import showPhoto1 from './assets/images/shows.png'

function App() {
  const [hover, setHover] = useState({
    state: false,
    id: 0
  })

  const handleMouseOver = (state, id) => {
    setHover({
      state,
      id
    })
  }

  useEffect(() => {
    if (hover.state === true) {
      document.querySelector('.shows h1').style.color = "#fff";
      switch (hover.id) {
        case 1:
          document.body.style.background = '#52053C'
          break;
        case 2:
          document.body.style.background = '#6F7204'
          break;
        case 3:
          document.body.style.background = '#4C0552'
          break;
        default:
          break;
      } 
    } else {
        document.querySelector('.shows h1').style.color = "#F7F429";
        document.body.style.background = '#141414'
    }

  }, [hover])

  return (
    <>
    <div className="App">
      <header className="header">
        <ul className="menu">
          <li><a href="#home">home</a></li>
          <li><a href="#concerts">concerts</a></li>
          <li><a href="#shows">shows</a></li>
        </ul>
      </header>
      <ul className="homepage" id="home">
        <li>
          <div className="homepagePhotos">
            <img alt="" src={homepagePhoto1}/>
            <img alt="" src={homepagePhoto2}/>
          </div>
        </li>
        <li>
          <div className="homepageTitle">
            <div className="txtArea">
              <h1 id="music">music</h1>
              <h2>events</h2>
            </div>
          </div>
        </li>
      </ul>
      <div id="concerts" className="concerts">
        <h1>concerts</h1>
          <ul className="concertsCard">
            <li>
              <h3>orchestra</h3>
              <p>October 26th</p>
              <img src={concertPhoto1} alt="aa"/>
              <button type="button">more</button>
            </li>
            <li>
              <h3>opera</h3>
              <p>October 13rd</p>
              <img src={concertPhoto2} alt="aa"/>
              <button type="button">more</button>
            </li>
            <li>
              <h3>musicians</h3>
              <p>October 26th</p>
              <img src={concertPhoto3} alt="aa"/>
              <button type="button">more</button>
            </li>
          </ul>
      </div>

    </div>
    <div id="shows" className="shows">
      <h1>shows</h1>
      <ul>
        <li onMouseEnter={() => {handleMouseOver(true, 1)}} onMouseLeave={() => {handleMouseOver(false, 0)}}>
          <img src={showPhoto1} alt="a"/>
          <div className="infoShow">
            <h3>mary’s pocket show</h3>
            <p>
              december 22nd <br />
              sp - brazil
            </p>
          </div>
        </li>
        <li onMouseEnter={() => {handleMouseOver(true, 2)}} onMouseLeave={() => {handleMouseOver(false, 0)}}>
          <img src={showPhoto1} alt="a"/>
          <div className="infoShow">
            <h3>mary’s pocket show</h3>
            <p>
              december 22nd <br />
              sp - brazil
            </p>
          </div>
        </li>
        <li onMouseEnter={() => {handleMouseOver(true, 3)}} onMouseLeave={() => {handleMouseOver(false, 0)}}>
          <img src={showPhoto1} alt="a"/>
          <div className="infoShow">
            <h3>mary’s pocket show</h3>
            <p>
              december 22nd <br />
              sp - brazil
            </p>
          </div>
        </li>
      </ul>
    </div>
    {/* <div className="navigationBtn">
      <button type="button">
        <svg width="59" height="33" viewBox="0 0 59 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.76777" y1="2.23223" x2="30.7678" y2="31.2322" stroke="#F7F429" stroke-width="5"/>
          <line y1="-2.5" x2="41.0122" y2="-2.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 59 4)" stroke="#F7F429" stroke-width="5"/>
        </svg>
      </button>
    </div> */}
    </>
  );
}

export default App;
