import React from 'react';
import './App.css';
import {work} from './constants/constants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <header className="p-4">
        <span>Kilian Sweeney: Developer | Designer</span>
      </header>
      <section>
        <div className="col-md-1 text-center">
          <div className="list-group list-group-horizontal list-group-flush">
            <a className="list-group-item list-group-item-action btn btn-social btn-linkdin" href="https://github.com/kilianSweeney"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="list-group-item list-group-item-action btn btn-social btn-linkdin" href="https://www.linkedin.com/in/kilian-sweeney-273b9118/"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </section>
      <section>
        <div className="container-flush text-center">
          <h1>some samples of my work</h1>
          {work.map((item, key) =>
              <div key={key} className="row">
                <div className="col-md-6 p-4">
                  <div className="image-holder">
                    <img alt={item.col1.image.title} src={item.col1.image.src}></img>
                  </div>
                  <p className="text-left">{item.col1.copy}</p>
                </div>
                <div className="col-md-6 p-4">
                  <div className="image-holder">
                    <img alt={item.col2.image.title} src={item.col2.image.src}></img>
                  </div>
                  <p className="text-left">{item.col2.copy}</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
      <footer className="p-4">Thank you for taking the time to explore a sampling of my work. Let's build great apps together. <a href="mailto:kilian_sweeney@yahoo.com">Kilian Sweeney</a></footer>
      </div>
  );
}

export default App;