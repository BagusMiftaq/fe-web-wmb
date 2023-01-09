import constants from "../../constants";
import {useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import seafood from "../../assets/seafood.jpg";
import table from "../../assets/table.jpg";
import order from "../../assets/order.jpg";

const Dashboard = () =>{
    const onNavigate = useNavigate();

    return (
        <div>
            <div className={"d-flex flex-column align-content-center"} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", marginTop:"30px"}}>
                <h1>Welcome to Warung Makan Bahari Apps</h1>
                <p className={"lead"}>
                    Citarasa masakan seafood khas Indonesia ada disini.
                </p>
            </div>
            <div className={"d-flex align-content-center"} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", marginTop:"30px"}}>
                <Card style={{ width: '18rem', height:"26rem", marginRight : "20px" }}>
                    <Card.Img variant="top" src={seafood} style={{width:"100%", height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Menu</Card.Title>
                        <Card.Text>
                            You can see, add, or delete any menu from the list.
                        </Card.Text>
                        <Button variant="primary" onClick={()=> onNavigate(constants.ROUTES.LIST_MENU)}>List of Menu</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:"26rem", marginRight : "20px"  }}>
                    <Card.Img variant="top" src={table} style={{width:"100%", height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Table</Card.Title>
                        <Card.Text>
                            You can see, add, or delete any table from the list.
                        </Card.Text>
                        <Button variant="primary" onClick={()=> onNavigate(constants.ROUTES.LIST_TABLE)}>List of Table</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:"26rem", marginRight : "20px"  }}>
                    <Card.Img variant="top" src={order} style={{width:"100%", height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Order</Card.Title>
                        <Card.Text>
                            You can see, add, or delete any menu order from the list.
                        </Card.Text>
                        <Button variant="primary" onClick={()=> onNavigate(constants.ROUTES.TRANSACTION_LIST)}>List of Order</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default Dashboard;