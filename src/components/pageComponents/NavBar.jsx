import {useEffect, useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import MoodMapLogo from '../../assets/MoodMapLogo.png';
import '../../styles/NavBar.css';
import * as constant from '../../constants/constants.js'
import Cookies from "js-cookie";
import {Power} from 'react-feather'

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(Cookies.get(constant.ACCESS_TOKEN))
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='navbar-wrapper'>
            <Navbar {...args} expand={'lg'} className='nav-bar' container={'xxl'} fixed='top'
                    style={{padding: '1rem 0'}}>
                <NavbarBrand href="/"><img src={MoodMapLogo} alt="Mood Map Logo"
                                           style={{width: '189px', height: '62px'}}/></NavbarBrand>
                <NavbarToggler onClick={toggle} style={{border: 'none'}}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto nav-bar-item-wrapper" navbar>
                        <NavItem>
                            <NavLink href='/' className='nav-txt'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/diary" className='nav-txt'>Your Diary</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/monitoring" className='nav-txt'>Monitoring</NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink href="/login" className='nav-txt'>
                        {!isLogged ? <Button outline className='mx-2 NavBarButton'>
                            Login</Button> : <Button   className='logout-btn'><Power color='#AE8BFF'/></Button>}
                    </NavLink>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;