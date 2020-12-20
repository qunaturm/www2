import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cloneElement } from 'react'

function Pizza({pizza, myButton, myButtonProp}) {
    return (
        <Card className="h-70 w-70">
            <Card.Img variant="top" src={pizza.picture} style={{border: "1px solid gray", borderRadius: "4px"}}/>
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.description}</Card.Text>
                <div>{myButton(myButtonProp)}</div>
            </Card.Body>
        </Card>
    )
}


export default Pizza;

// function Pizza({pizza}) {
//     return (
//         <Card className="h-70 w-70">
//             <Card.Img variant="top" src={pizza.picture} style={{border: "1px solid gray", borderRadius: "4px"}}/>
//             <Card.Body>
//                 <Card.Title>{pizza.name}</Card.Title>
//                 <Card.Text>{pizza.description}</Card.Text>
                // <Link to={`/createOrder/${pizza.id}`} >
                //     <Button variant="primary">{pizza.price} рублей</Button>
                // </Link>
//             </Card.Body>
//         </Card>
//     )
// }

/* <Row>
    <Col style={{width: "150px !important", heigh: "150px !important"}}>
        <Image style={{width: "inherit", heigh: "inherit"}} src={pizza.picture} rounded />
    </Col>
    <Col>
        <Row>{pizza.name}</Row>
        <Row>{pizza.price}</Row>
        {showAdditions && <Row>{pizza.additionals}</Row>}
    </Col>
</Row>
<Row>{pizza.description}</Row>
<Row classname="mt-2">
    <Link to={`/createOrder/${pizza.id}`} >
        <Button variant="primary">Купить сейчас</Button>
    </Link>
</Row> */