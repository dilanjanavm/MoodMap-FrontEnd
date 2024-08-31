import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import MoodMapLogo from '../../assets/MoodMapLogo.png';
import '../../styles/NavBar.css';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{ width: '100%' }}>
            <Navbar {...args} expand={'md'} className='nav-bar' container={'fluid'}>
                <NavbarBrand href="/"><img src={MoodMapLogo} alt="Mood Map Logo" style={{ width: '189px', height: '62px' }} /></NavbarBrand>
                <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto nav-bar-item-wrapper" navbar>
                        <NavItem>
                            <NavLink className='nav-txt'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='nav-txt'>Why Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='nav-txt'>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Button outline style={{minWidth:'max-content'}}>Sign in / Sign up</Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;