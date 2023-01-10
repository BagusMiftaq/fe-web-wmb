import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/eventHandlers";
import {useNavigate} from "react-router-dom";
import constants from "../../constants"
import StyledContainer from "../../components/StyledContainer";
import {FormText} from "../../components";
import {Button, Form} from "react-bootstrap";
import loginimg from "../../assets/login.svg";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../services/authApi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [disable, setDisable] = useState(true);
    const [show, isShow] = useState("none");
    const [message, setMessage] = useState("");
    const onNavigate = useNavigate();
    const [loaded, isLoaded] = useState(false);
    const {fetchMutation: onLogin, loading} = useFetchMutation(login, () => onNavigate(constants.ROUTES.DASHBOARD))

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({email, password});

    }

    useEffect(() => {
        if (email && password.length > 6) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [email, password])


    return (
        <StyledContainer className={'d-flex justify-content-center align-items-center'}
                         style={{
                             marginTop: "80px",
                             width: "750px",
                             height: "450px",
                             borderRadius: "10px",
                             border: "1px solid skyblue",
                             padding: "20px"
                         }}>
            <div className={"d-flex justify-content-center flex-row"}>
                <div style={{marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={loginimg} style={{height: "200px"}}/>
                </div>
                <div className={"d-flex justify-content-center flex-column"} style={{width: "300px"}}>
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
                        <div style={{marginBottom: "10px", display: "flex", justifyContent: "center"}}>
                            <p className="text-danger" style={{display: show}}>{message}</p>
                        </div>
                        <Button type={"submit"} disabled={disable}
                                style={{width: "100%"}}>Login
                        </Button>
                    </Form>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Login;