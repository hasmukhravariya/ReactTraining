import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="center">
      <Link to="/form" className="button">
        Add User{" "}
      </Link>
      <Link to="/allusers" className="button">
        View Users{" "}
      </Link>
    </div>
  );
}
