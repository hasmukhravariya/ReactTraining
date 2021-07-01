
import {Link} from "react-router-dom";

import './index.css';

export default function Home() {
  return (
    <div className='center'>
      <Link to="/Form" className="button">Open</Link>
    </div>  
  );
}