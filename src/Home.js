
import {Link} from "react-router-dom";

import './index.css';

export default function Home() {
  return (
      <div className="App">
        <Link to="/Form" className="button">Open</Link>
      </div>
  );
}