import './App.css';
import homepagePhoto1 from './assets/images/home1-pb.png'
import homepagePhoto2 from './assets/images/home2-pb.png'
import concertPhoto1 from './assets/images/concert1.png'
import concertPhoto2 from './assets/images/concert2.png'
import concertPhoto3 from './assets/images/concert3.png'

function App() {
  
  return (
    <>
    <div className="App">
      <header className="header">
        <ul className="menu">
          <li>home</li>
          <li>concerts</li>
          <li>shows</li>
        </ul>
      </header>
      <ul className="homepage">
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
      <div className="concerts">
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
    <div className="navigationBtn">
      <button type="button">
        <svg width="59" height="33" viewBox="0 0 59 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.76777" y1="2.23223" x2="30.7678" y2="31.2322" stroke="#F7F429" stroke-width="5"/>
          <line y1="-2.5" x2="41.0122" y2="-2.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 59 4)" stroke="#F7F429" stroke-width="5"/>
        </svg>
      </button>
    </div>
    </>
  );
}

export default App;
