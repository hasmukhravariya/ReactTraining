
import {Link} from "react-router-dom";

import './index.css';

export default function Home() {
  return (
    <div className='center'>
      <div className="container">
        <Link to="/Form" className="button">Open</Link>
      </div>  
    </div>
  );
}