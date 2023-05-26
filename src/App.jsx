import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Peoples from './components/Peoples';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <div className="hero">
            <nav>
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG6a0Pw6iyJnA/profile-displayphoto-shrink_200_200/0/1541457400725?e=1637798400&v=beta&t=LfsO6VmLjeFuv8fGf95cZGR62pvkPsiO_mWwv1938AM" alt="" className="logo" />
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/peoples">Peoples</Link></li>
                <li><a href="https://www.linkedin.com/in/bersnardcoello/" target="_blank">Sobre mi</a></li>
              </ul>
            </nav>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/peoples" exact element={<Peoples />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
