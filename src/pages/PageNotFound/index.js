import {useLocation, useNavigate} from "react-router-dom";
import {StyledContainer} from "../../components";
import notFound from "../../assets/not_found.svg"
import {Button} from "react-bootstrap";
import constants from "../../constants";

const PageNotFound = () => {
    const location = useLocation();
    const onNavigate = useNavigate();
    return (
        <StyledContainer style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"50px"}}>

            <img height={"350px"} src={notFound} alt={"not-found"}/>
            <h3 style={{marginTop:"32px"}}>No match for <code>{location.pathname}</code></h3>
            <Button style={{marginTop:"32px"}} variant={"outline-primary"} onClick={()=>onNavigate(constants.ROUTES.DASHBOARD)}>Back to Dashboard</Button>
        </StyledContainer>
    )
}

export default PageNotFound;