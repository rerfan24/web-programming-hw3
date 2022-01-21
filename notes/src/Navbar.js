import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Note Everything</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login" style={{ 
          color: 'white', 
          backgroundColor: '#6d35f1',
          borderRadius: '8px' 
        }}>Login</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#6d35f1',
          borderRadius: '8px' 
        }}>New Note</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;