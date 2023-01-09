import {useEffect, useState} from "react";
import useToken from "../../hooks/useToken";
import {onChangeText} from "../../utils/eventHandlers";
import {useNavigate} from "react-router-dom";
import constants from "../../constants"
import StyledContainer from "../../components/StyledContainer";
import {FormText} from "../../components";
import {Button, Form} from "react-bootstrap";
import login from "../../assets/login.svg";


const data = {
    email : "admin@example.com",
    password : "12345678"
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const {setToken} = useToken();
    const [disable, setDisable] = useState(true);
    const [show, isShow] = useState("none");
    const [message, setMessage] = useState("");
    const onNavigate = useNavigate();
    const [loading, isLoading] = useState(false);

    const handleSubmit =(event)=>{
        event.preventDefault();
        setDisable(true);
        isLoading(true);
        setTimeout(()=>{
            if (email===data.email && password===data.password){
                setToken({token: "my token"});
                onNavigate(constants.ROUTES.DASHBOARD);
                isLoading(false);
            }
        }, 3000)
        if(email!==data.email) {
            isShow("inline");
            setMessage("User not found")
            setDisable(false);
            isLoading(false);
        } else if(password!==data.password){
            isShow("inline");
            setMessage("Password is wrong")
            setDisable(false);
            isLoading(false);
        }

    }

    useEffect(()=>{
        if(email && password.length>6){
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [email, password])


    return(
        <StyledContainer className={'d-flex justify-content-center align-items-center'}
                         style={{marginTop:"80px", width:"750px", height:"450px", borderRadius:"10px",  border:"1px solid skyblue",
                            padding:"20px"}}>
            <div className={"d-flex justify-content-center flex-row"}>
                <div style={{marginRight:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img src={login} style={{height:"200px"}}/>
                </div>
                <div className={"d-flex justify-content-center flex-column"} style={{width:"300px"}}>
                    <h1>Login Form</h1>
                    <hr/>
                    <Form onSubmit={handleSubmit}>
                        <FormText
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter your email"}
                            onChange={onChangeText(setEmail)}
                        />
                        <FormText
                            label={"Password"}
                            type={"password"}
                            placeholder={"Enter your password"}
                            onChange={onChangeText(setPassword)}
                        />
                        <div style={{marginBottom: "10px", display:"flex", justifyContent:"center"}}>
                            <p className="text-danger" style={{display:show}}>{message}</p>
                        </div>
                        <Button type={"submit"} disabled={disable} style={{width:"100%"}}>{loading? "Loading...":"Login"}
                        </Button>
                    </Form>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Login;