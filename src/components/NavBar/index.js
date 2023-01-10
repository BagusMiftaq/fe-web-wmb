import {Button, Col, Container, Navbar, NavLink} from "react-bootstrap";
import {StyledNav} from "./styles";
import {Link, useNavigate} from "react-router-dom";
import constants from "../../constants";
import logo from "../../assets/logo.png";
import {removeToken} from "../../utils/token";

const menu = [
    {path: constants.ROUTES.LIST_MENU, menuName: "Menu Management"},
    {path: constants.ROUTES.LIST_TABLE, menuName: "Table Management"},
    {path: constants.ROUTES.TRANSACTION_LIST, menuName: "Transaction"}
]


const NavBar = () => {
    const onNavigate = useNavigate();

    const onLogout = () => {
        removeToken();
        onNavigate(constants.ROUTES.LOGIN);
    }
    return (
        <Navbar bg={'light'} variant={'light'} expand={'light'} sticky={'top'} style={{height:"100px"}}>
            <Container>
                <Col className={"col-1"}>
                    <img src={logo} alt={"logo"} onClick={()=>onNavigate(constants.ROUTES.DASHBOARD)}/>
                </Col>
                <Col className={"col-3"}>
                        <Navbar.Brand><text style={{fontWeight:"bold"}}>WMB</text> version 1.0.0</Navbar.Brand>
                </Col>
                <Col>
                    <StyledNav className={'mt-3'} style={{marginRight:"20px"}}>
                        {menu?.map((item, index)=>(
                            <Link to={item.path} className={"nav-link mx-4 p-2"} style={{color:""}} key={index}>
                               <p>{item.menuName}</p>
                            </Link>
                        ))}
                    </StyledNav>
                </Col>
                <Col className={"col-1"}>
                    <Button variant={"outline-secondary"} onClick={onLogout}>
                        Logout
                    </Button>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBar
