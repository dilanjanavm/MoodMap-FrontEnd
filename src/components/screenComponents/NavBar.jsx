import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';
import MoodMapLogo from '../../assets/MoodMapLogo.png';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{width:'100%'}}>
            <Navbar {...args} expand={'md'} style={{borderBottom: '0.5px solid rgba(0, 0, 0, 0.41)', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} container={'fluid'}>
                <NavbarBrand href="/"><img src={MoodMapLogo} alt="Mood Map Logo" style={{width:'189px', height:'62px'}}/></NavbarBrand>
                <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Why Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Button outline>Sign in /Sign up</Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;