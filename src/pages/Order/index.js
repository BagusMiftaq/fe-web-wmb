import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import {StyledListGroup} from "../MenuList/styles";
import OrderItem from "./OrderItem";
import justList from "../../hoc/justList";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Modalizer = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

const FORM_CAT = [
    {label: "All"},
    {label: "Food"},
    {label: "Beverage"}
]

const Order = ({data}) => {
    const dispatch = useDispatch();
    const [activated, setActivated] = useState(false);
    const [val, setVal] = useState("");

    console.log(val);
    console.log(data);

    return (
        <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px"}}>
            <div style={{display: "flex", flexDirection: "column", marginRight: "20px"}}>
                <div style={{justifyContent: "center", alignItems: "center"}}>
                    <h2 style={{margin: "10px"}}>List Menu</h2>
                    {FORM_CAT.map(item => (
                        <Button variant={val === item.label && activated ? "primary" : "outline-primary"}
                                style={{margin: "10px"}} onClick={() => {
                            setVal(item.label)


                        }
                        }>{item.label}</Button>
                    ))}
                </div>
                <hr style={{border: "2px solid blue"}}/>
                <div style={{display: "flex", flexWrap: "wrap", width: "350px"}}>
                    <StyledListGroup className={"d-flex flex-row flex-wrap"}>
                        {
                            data?.map((item) => (
                                <OrderItem
                                    data={item}
                                    key={item?.menuId}
                                />
                            ))}
                    </StyledListGroup>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                <h2>Order List</h2>
            </div>
            <div style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                <h2>Transaction</h2>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    listData: state.menus.menuList
})

export default connect(mapStateToProps, null)(justList(Order));