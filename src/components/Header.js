import styled from 'styled-components';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUser, FaEnvelope, FaBell } from 'react-icons/fa';

const Header = styled(Navbar)`
 background-color:red;
  padding: 10px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 60%;
  margin: 0 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #ffd700; /* Hover color (e.g., gold) */
    }
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderComponent = () => (
  <Header variant="dark" expand="lg">
    <Container>
      {/* Logo */}
      <Navbar.Brand href="/">
        <Logo
          className="logo"
          src="https://res.cloudinary.com/df7wnybwg/image/upload/v1730351090/vibehubadmin/vibehublogo_cwq9jj.png"
          alt="Vibehub Logo"
        />
      </Navbar.Brand>

      {/* Centered Search Bar */}
      <Nav className="mx-auto">
        <SearchInput placeholder="Search..." />
      </Nav>

      {/* Navigation Icons */}
      <NavIcons>
        <FaHome className="icon" title="Home" />
        <FaUser className="icon" title="Profile" />
        <FaEnvelope className="icon" title="Messages" />
        <FaBell className="icon" title="Notifications" />

        {/* User Avatar with Dropdown Menu */}
        <NavDropdown
          align="end"
          title={<Avatar src="https://via.placeholder.com/40" alt="User Avatar" />}
          id="user-dropdown"
        >
          <NavDropdown.Item href="#action1">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Logout</NavDropdown.Item>
        </NavDropdown>
      </NavIcons>
    </Container>
  </Header>
);

export default HeaderComponent;
