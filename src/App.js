import React from 'react';
import './App.css';
import {work} from './constants/constants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Mywork from './components/mywork';

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
                <Mywork workitem={item.col1}></Mywork>
                <Mywork workitem={item.col2}></Mywork>
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