import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUser, FaEnvelope, FaBell } from 'react-icons/fa';
import './index.css';

const HeaderComponent = () => (
  <Navbar className="header" variant="dark" expand="lg">
    <Container>
      {/* Logo */}
      <Navbar.Brand href="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/df7wnybwg/image/upload/v1730351090/vibehubadmin/vibehublogo_cwq9jj.png"
          alt="Vibehub Logo"
        />
      </Navbar.Brand>

      {/* Centered Search Bar */}
      <Nav className="mx-auto search-container">
        <input className="search-input" placeholder="Search..." />
      </Nav>

      {/* Navigation Icons */}
      <div className="nav-icons">
        <FaHome className="icon" title="Home" />
        <FaUser className="icon" title="Profile" />
        <FaEnvelope className="icon" title="Messages" />
        <FaBell className="icon" title="Notifications" />

        {/* User Avatar with Dropdown Menu */}
        <NavDropdown
          align="end"
          title={<img className="avatar" src="https://via.placeholder.com/40" alt="User Avatar" />}
          id="user-dropdown"
        >
          <NavDropdown.Item href="#action1">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  </Navbar>
);

export default HeaderComponent;
