import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-services";

export default function NavBar({ user }, { setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/appointments">All Appointments </Link>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}